import { NextFunction, Request, Response } from "express";
import { hashpassword } from "../utils/hashpassword";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// a new user signups and his details are stored in database
export default async function signupUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { firstname, lastname, email, password } = req.body;

  // user provided password is hashed
  const hashedpassword = await hashpassword(password);

  try {
    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedpassword,
      },
    });
  } catch (e) {
    console.log(e);
    return res.json({
      error: e,
      msg: "some error occurred at db level",
    });
  }

  await prisma.$disconnect();

  next();
}
