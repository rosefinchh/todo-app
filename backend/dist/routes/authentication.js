"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const signupDb_1 = __importDefault(require("../db/signupDb"));
require("dotenv/config");
const jwtToken_1 = require("../utils/jwtToken");
const signinDb_1 = __importDefault(require("../db/signinDb"));
exports.authenticationRouter = (0, express_1.Router)();
// signup route
exports.authenticationRouter.post("/signup", authMiddleware_1.signupMiddleware, signupDb_1.default, (req, res) => {
    const { firstname, lastname, email } = req.body;
    return res.status(200).json({
        msg: "SignUp Successful",
        token: (0, jwtToken_1.tokenSign)({ firstname, lastname, email }),
    });
});
// signin route
exports.authenticationRouter.post("/signin", authMiddleware_1.signinMiddleware, signinDb_1.default, (req, res) => {
    const { email, password } = req.body;
    return res.status(200).json({
        msg: "Signin Successful",
    });
});
