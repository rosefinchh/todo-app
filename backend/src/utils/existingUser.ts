import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

// checks from the db that if an user already
// exists with the same email or not
export async function existingUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists?.email === email) {
    return res.status(403).json({
      msg: "An user with this email already exists. Use different email",
    });
  }

  next();
}
