import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { checkpassword } from "../utils/checkpassword";
import { tokenSign } from "../utils/jwtToken";

const prisma = new PrismaClient();

/**
 * signin user middleware
 * checks if the password provided
 * by the user at signin time is correct or not
 * the password is matched with the hashed password store in db
 */
export default async function signinUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  // user provided password is hashed

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const firstname = user?.firstname as string;
    const dbhashedPassword = user?.password as string;

    const verifiedPassword = await checkpassword(password, dbhashedPassword);

    // generating jwt token
    const token = tokenSign({ firstname, email });

    if (verifiedPassword) {
      await prisma.$disconnect();
      return res.json({
        msg: "signin successful",
        token: token,
      });
    } else {
      await prisma.$disconnect();
      return res.json({
        msg: "Password is incorrect. Check the password.",
      });
    }
  } catch (e) {
    await prisma.$disconnect();
    return res.status(403).json({
      msg: "No user with this email is registered",
    });
  }
}
