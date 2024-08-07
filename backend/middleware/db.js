const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function findEmail(req, res, next) {
  const email = req.body.email;

  try {
    const response = await prisma.user.findFirstOrThrow({
      where: {
        email: email,
      },
    });

    next();
  } catch (err) {
    const error = err.name;
    if (error === "NotFoundError") {
      return res.json({
        msg: `Incorrect email provided: ${email}`,
      });
    } else {
      return res.json({
        msg: "Something went wrong",
      });
    }
  }
}

module.exports = {
  findEmail: findEmail,
};
