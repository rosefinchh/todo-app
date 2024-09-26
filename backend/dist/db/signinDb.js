"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = signinUser;
const client_1 = require("@prisma/client");
const checkpassword_1 = require("../utils/checkpassword");
const prisma = new client_1.PrismaClient();
// a new user signups and his details are stored in database
function signinUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        // user provided password is hashed
        try {
            const user = yield prisma.user.findUnique({
                where: {
                    email: email,
                },
            });
            const dbhashedPassword = user === null || user === void 0 ? void 0 : user.password;
            const verifiedPassword = yield (0, checkpassword_1.checkpassword)(password, dbhashedPassword);
            if (verifiedPassword) {
                return res.json({
                    msg: "signin was successful and a token will be sent",
                    token: "jw983nfww9",
                });
                next();
            }
            else {
                return res.json({
                    msg: "password or email is not correct",
                });
            }
        }
        catch (e) {
            console.log(e);
        }
        yield prisma.$disconnect();
        next();
    });
}
