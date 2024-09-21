"use strict";
/**
 * this function hashes the password
 * provided by the user at signup time
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashpassword = hashpassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashpassword(password_1) {
    return __awaiter(this, arguments, void 0, function* (password, saltRounds = 10) {
        const hashedpassword = yield bcrypt_1.default.hash(password, saltRounds);
        return hashedpassword;
    });
}
