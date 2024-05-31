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
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		};
		await mongoose.connect(config.databaseUrl as string, options as any);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export default connectDB;
