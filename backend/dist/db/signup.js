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
exports.default = signupDB;
const client_1 = require("@prisma/client");
const hashpassword_1 = require("../utils/hashpassword");
const prisma = new client_1.PrismaClient();
// a new user signups and his details are stored in database
function signupDB(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstname, lastname, email, password } = req.body;
        // user provided password is hashed
        const hashedpassword = yield (0, hashpassword_1.hashpassword)(password);
        const newUser = yield prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedpassword,
            },
        });
        if (!newUser) {
            return res.json({
                msg: "some error occurred in database level",
            });
        }
        console.log(newUser);
        yield prisma.$disconnect();
        next();
    });
}
