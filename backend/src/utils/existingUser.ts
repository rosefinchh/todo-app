import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

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
    return res.status(422).json({
      msg: "Email already in use. Use different email",
    });
  }

  next();
}
