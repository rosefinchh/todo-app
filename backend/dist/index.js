"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("./routes/authentication");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user/auth", authentication_1.authenticationRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("something went wrong");
});
app.listen(3000, () => {
    console.log(`server is listening`);
});
