const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function newUserSignup(firstName, lastName, email, password) {
  const userSignup = await prisma.user.create({
    data: {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    },
  });

  console.log(`new user signed up`);
}

module.exports = {
  newUserSignup: newUserSignup,
};
