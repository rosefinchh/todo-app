import { NextFunction, Request, Response } from "express";
import zod from "zod";

const signinSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

const signupSchema = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  email: zod.string(),
  password: zod.string(),
});

// signin middleware
export function signinMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  const result = signinSchema.safeParse({ email, password });

  if (!result.success) {
    return res.json({
      msg: "Some wrong inputs were passed in email or password",
    });
  }

  next();
}

// signup middleware
export function signupMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { firstname, lastname, email, password } = req.body;

  const result = signupSchema.safeParse({
    firstname,
    lastname,
    email,
    password,
  });

  if (!result.success) {
    return res.status(400).json({
      msg: "Some wrong inputs were passed in firstname, lastname, email or password",
    });
  }

  next();
}
