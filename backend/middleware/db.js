const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// this db middleware checks if an user already exists in the db with same email
async function checkIfSameUserExists(req, res, next) {
  const { email } = req.body;

  const userFound = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userFound) {
    return res.status(400).json({
      msg: "USER EXISTS",
    });
  } else {
    next();
  }
}

module.exports = {
  checkIfSameUserExists: checkIfSameUserExists,
};
