import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on("error", (error) => {
      console.log("MongoDB connection error: ", error);
    });
    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
