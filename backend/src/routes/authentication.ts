import express, { Router } from "express";
import {
  signinMiddleware,
  signupMiddleware,
} from "../middleware/authMiddleware";
import signupDB from "../db/signup";

export const authenticationRouter = Router();

// signup route
authenticationRouter.post("/signup", signupMiddleware, signupDB, (req, res) => {
  return res.json({
    msg: "SignUp Successful",
  });
});

// signin route
authenticationRouter.post("/signin", signinMiddleware, (req, res) => {
  const { email, password } = req.body;

  return res.json({
    msg: "Signin Successful",
    response: {
      email,
      password,
    },
  });
});
