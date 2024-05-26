import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";


const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  // validation is the first step to check data

  if (!name || !email || !password) {
    const error = createHttpError("400", "All fields are required");
    return next(error);
  }

  const user = await userModel.findOne({ email });

  if (user) {
    const error = createHttpError("400", "User already exists");
    return next(error);
  }

  const hashedPassword = await bcrypt.hash(password, 2);

  const newUser = userModel.create({
    name,
    email,
    password: hashedPassword,
  });
  // process to perform login on that data
  // response
  res.json({ id:(await newUser)._id });
};

export { createUser };
