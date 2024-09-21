import express, { Router } from "express";
import {
  signinMiddleware,
  signupMiddleware,
} from "../middleware/authMiddleware";
import signupUser from "../db/signup";

export const authenticationRouter = Router();

// signup route
authenticationRouter.post(
  "/signup",
  signupMiddleware,
  signupUser,
  (req, res) => {
    return res.json({
      msg: "SignUp Successful",
    });
  }
);

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
