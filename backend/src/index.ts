import express, { NextFunction, Request, Response } from "express";
import { authenticationRouter } from "./routes/authentication";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send(`hello ${req.query.person}`);
});

app.use("/user/auth", authenticationRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("something went wrong");
});

app.listen(3000, () => {
  console.log(`------------server is listening-------------------`);
});
