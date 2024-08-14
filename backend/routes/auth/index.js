const { Router } = require("express");
const { newUserSignup } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findEmail, checkIfSameUserExists } = require("../../middleware/db");
const {
  userSignupMiddleware,
  userSigninMiddleware,
  checkAlreadyAnUser,
} = require("../../middleware/userInput");

const router = Router();

router.post(
  "/signup",
  userSignupMiddleware,
  checkIfSameUserExists,
  async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // storing hashed password in database
    const hashedPassword = await bcrypt.hash(password, 10);

    await newUserSignup(firstName, lastName, email, hashedPassword);

    return res.status(200).json({
      msg: "User has signed up !",
    });
  }
);

router.post("/signin", userSigninMiddleware, (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({
    msg: response,
  });
});

module.exports = router;
