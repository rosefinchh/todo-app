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
exports.default = signupUser;
const hashpassword_1 = require("../utils/hashpassword");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// a new user signups and his details are stored in database
function signupUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstname, lastname, email, password } = req.body;
        // user provided password is hashed
        const hashedpassword = yield (0, hashpassword_1.hashpassword)(password);
        try {
            const newUser = yield prisma.user.create({
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: hashedpassword,
                },
            });
        }
        catch (e) {
            console.log(e);
            return res.json({
                error: e,
                msg: "some error occurred at db level",
            });
        }
        yield prisma.$disconnect();
        next();
    });
}
