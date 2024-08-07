const { Router } = require("express");
const { newUserSignup } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findEmail } = require("../../middleware/db");
const {
  userSignupMiddleware,
  userSigninMiddleware,
} = require("../../middleware/userInput");

const router = Router();

router.post("/signup", userSignupMiddleware, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await newUserSignup(firstName, lastName, email, hashedPassword);

  return res.json({
    msg: "User has signed up !",
  });
});

router.post("/signin", userSigninMiddleware, (req, res) => {
  const { email, password } = req.body;

  res.json({
    msg: response,
  });
});

router.post("/find", findEmail, (req, res) => {
  res.json({
    msg: "if this message is shown to you means everything went good",
  });
});

module.exports = router;
