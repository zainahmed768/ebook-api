import express from "express";
import globalErrorHandlers from "./middlewares/globalErrorHandlers";
import userRouter from "./user/userRouter";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api/users", userRouter);

app.use(globalErrorHandlers);

export default app;
