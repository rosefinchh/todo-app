import { NextFunction, Request, Response } from "express";
import { hashpassword } from "../utils/hashpassword";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// function to capitalize the first letter of firstname and lastname
function capitalizeFirstLetter(input: string) {
  if (!input) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
}

// a new user signups and his details are stored in database
export default async function signupUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { firstname, lastname, email, password } = req.body;

  const capitalizedFirstname = capitalizeFirstLetter(firstname);
  const capitalizedLastname = capitalizeFirstLetter(lastname);

  // user provided password is hashed
  const hashedpassword = await hashpassword(password);

  try {
    const newUser = await prisma.user.create({
      data: {
        firstname: capitalizedFirstname,
        lastname: capitalizedLastname,
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
