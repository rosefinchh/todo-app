import express, { Router } from "express";
import {
  signinMiddleware,
  signupMiddleware,
} from "../middleware/authMiddleware";
import signupUser from "../db/signupDb";
import "dotenv/config";
import { tokenSign } from "../utils/jwtToken";
import signinUser from "../db/signinDb";

export const authenticationRouter = Router();

// signup route
authenticationRouter.post(
  "/signup",
  signupMiddleware,
  signupUser,
  (req, res) => {
    const { firstname, lastname, email } = req.body;
    return res.status(200).json({
      msg: "SignUp Successful",
      token: tokenSign({ firstname, email }),
    });
  }
);

// signin route
authenticationRouter.post(
  "/signin",
  signinMiddleware,
  signinUser,
  (req, res) => {
    const { email, password } = req.body;

    return res.status(200).json({
      msg: "Signin Successful on authenticationRouter.post",
    });
  }
);
