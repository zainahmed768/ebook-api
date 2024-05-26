import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
const globalErrorHandlers = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    message: error.message,
    errorStack: error.stack,
  });
};

export default globalErrorHandlers;
