import express, { NextFunction, Request, Response } from "express";
import { authenticationRouter } from "./routes/authentication";
const app = express();

app.use(express.json());

app.use("/user/auth", authenticationRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("something went wrong");
});

app.listen(3000, () => {
  console.log(`server is listening`);
});
