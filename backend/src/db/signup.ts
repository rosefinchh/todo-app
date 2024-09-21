import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { hashpassword } from "../utils/hashpassword";

const prisma = new PrismaClient();

// a new user signups and his details are stored in database
export default async function signupDB(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { firstname, lastname, email, password } = req.body;

  // user provided password is hashed
  const hashedpassword = await hashpassword(password);

  const newUser = await prisma.user.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedpassword,
    },
  });

  if (!newUser) {
    return res.json({
      msg: "some error occurred in database level",
    });
  }

  console.log(newUser);

  await prisma.$disconnect();

  next();
}
