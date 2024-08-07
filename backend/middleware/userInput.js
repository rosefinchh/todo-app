const zod = require("zod");

// zod schema for signup parameters
const UserSignupSchema = zod.object({
  firstName: zod.string().trim(),
  lastName: zod.string().trim(),
  email: zod.string().email().trim(),
  password: zod.string().trim(),
});

// signup middleware
function userSignupMiddleware(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  const parsedInput = UserSignupSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
  });

  if (parsedInput.success) {
    next();
  } else {
    return res.json({
      msg: "check the signup inputs you have provided. some error occurred",
    });
  }
}

// zod schema for signup parameters
const UserSigninSchema = zod.object({
  email: zod.string().email().trim(),
  password: zod.string().trim(),
});

// signin middleware
function userSigninMiddleware(req, res, next) {
  const { email, password } = req.body;

  const parsedInput = UserSigninSchema.safeParse({ email, password });

  if (parsedInput.success) {
    next();
  } else {
    return res.json({
      msg: "check the signin inputs you have provided. some error occurred",
    });
  }
}

module.exports = {
  userSignupMiddleware: userSignupMiddleware,
  userSigninMiddleware: userSigninMiddleware,
};
