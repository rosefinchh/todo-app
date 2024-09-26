"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenSign = tokenSign;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_secret = process.env.JWT_SECRET_KEY || "2398fja9afjJ8eMw8FWJF83";
function tokenSign({ firstname, lastname, email }) {
    const token = jsonwebtoken_1.default.sign({ firstname, lastname, email }, jwt_secret);
    return token;
}
