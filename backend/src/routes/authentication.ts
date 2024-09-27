import express, { Router } from "express";
import {
  signinMiddleware,
  signupMiddleware,
} from "../middleware/authMiddleware";
import signupUser from "../db/signupDb";
import "dotenv/config";
import { tokenSign } from "../utils/jwtToken";
import signinUser from "../db/signinDb";
import { existingUser } from "../utils/existingUser";

export const authenticationRouter = Router();

// signup route
authenticationRouter.post(
  "/signup",
  signupMiddleware,
  existingUser,
  signupUser,
  (req, res) => {
    const { firstname, email } = req.body;
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
    return res.json({});
  }
);
