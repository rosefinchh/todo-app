import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { checkpassword } from "../utils/checkpassword";
import { tokenSign } from "../utils/jwtToken";

const prisma = new PrismaClient();

// a new user signups and his details are stored in database
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

    if (verifiedPassword) {
      return res.json({
        msg: "signin was successful on signinUser middleware and a token will be sent",
        token: tokenSign({ firstname, email }),
      });
    } else {
      return res.json({
        msg: "something is wrong",
      });
    }
  } catch (e) {
    console.log(e);
  }

  await prisma.$disconnect();

  next();
}
