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
    return res.json({
      msg: "user with same email already exists, try different one",
    });
  } else {
    next();
  }
}

module.exports = {
  checkIfSameUserExists: checkIfSameUserExists,
};
