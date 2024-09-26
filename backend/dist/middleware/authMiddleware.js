"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinMiddleware = signinMiddleware;
exports.signupMiddleware = signupMiddleware;
const zod_1 = __importDefault(require("zod"));
const signinSchema = zod_1.default.object({
    email: zod_1.default.string(),
    password: zod_1.default.string(),
});
const signupSchema = zod_1.default.object({
    firstname: zod_1.default.string(),
    lastname: zod_1.default.string(),
    email: zod_1.default.string(),
    password: zod_1.default.string(),
});
// signin middleware
function signinMiddleware(req, res, next) {
    const { email, password } = req.body;
    const result = signinSchema.safeParse({ email, password });
    if (!result.success) {
        return res.json({
            msg: "Some wrong inputs were passed in email or password",
        });
    }
    next();
}
// signup middleware
function signupMiddleware(req, res, next) {
    const { firstname, lastname, email, password } = req.body;
    const result = signupSchema.safeParse({
        firstname,
        lastname,
        email,
        password,
    });
    if (!result.success) {
        return res.status(400).json({
            msg: "Some wrong inputs were passed in firstname, lastname, email or password",
        });
    }
    next();
}
