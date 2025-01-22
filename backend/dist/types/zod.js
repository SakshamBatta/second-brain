"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagTypes = exports.contentTypes = exports.userTypes = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userTypes = zod_1.default.object({
    username: zod_1.default
        .string()
        .min(3, "Username must be atleast 3 characters long")
        .max(10, "Username must be atmost 10 characters long"),
    password: zod_1.default
        .string()
        .min(8, "Password must be atleast 8 characters long")
        .max(20, "Password must be atmost 20 characters long")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"),
});
exports.contentTypes = zod_1.default.object({
    link: zod_1.default.string(),
    title: zod_1.default.string(),
});
exports.tagTypes = zod_1.default.object({
    title: zod_1.default.string(),
});
