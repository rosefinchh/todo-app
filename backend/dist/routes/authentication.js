"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationRouter = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const signup_1 = __importDefault(require("../db/signup"));
exports.authenticationRouter = (0, express_1.Router)();
// signup route
exports.authenticationRouter.post("/signup", authMiddleware_1.signupMiddleware, signup_1.default, (req, res) => {
    return res.json({
        msg: "SignUp Successful",
    });
});
// signin route
exports.authenticationRouter.post("/signin", authMiddleware_1.signinMiddleware, (req, res) => {
    const { email, password } = req.body;
    return res.json({
        msg: "Signin Successful",
        response: {
            email,
            password,
        },
    });
});
