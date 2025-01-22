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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userRegister = void 0;
const zod_1 = require("../../types/zod");
const user_1 = __importDefault(require("../../schema/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const registerPayload = req.body;
    try {
        const validatedPayload = zod_1.userTypes.safeParse(registerPayload);
        if (!validatedPayload.success) {
            console.log(validatedPayload.error.issues);
            res.status(411).json({
                message: "Error in inputs",
            });
            return;
        }
        const existingUser = yield user_1.default.findOne({
            username: registerPayload.username,
        });
        if (existingUser) {
            res.status(403).json({
                message: "User already exists with this username",
            });
            return;
        }
        yield user_1.default.create({
            username: registerPayload.username,
            password: registerPayload.password,
        });
        res.status(200).json({
            message: "Signed Up",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});
exports.userRegister = userRegister;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield user_1.default.findOne({ username: username });
        if (!user) {
            res.status(403).json({
                message: "Can not find a user with the username",
            });
            return;
        }
        if (user.password !== password) {
            res.status(403).json({
                message: "Password is incorrect",
            });
            return;
        }
        const id = user._id.toString();
        const token = jsonwebtoken_1.default.sign({ id }, "secret");
        // console.log(id);
        res.status(200).json({
            token: token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});
exports.userLogin = userLogin;
