"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constRouter = void 0;
const express_1 = __importDefault(require("express"));
const content_1 = require("../../controllers/content/content");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
exports.constRouter = express_1.default.Router();
exports.constRouter.post("/create", authMiddleware_1.authMiddleware, content_1.createContent);
exports.constRouter.get("/get", authMiddleware_1.authMiddleware, content_1.getContent);
exports.constRouter.delete("/delete/:id", authMiddleware_1.authMiddleware, content_1.deleteContent);
exports.constRouter.get("/user/get", authMiddleware_1.authMiddleware, content_1.getContentByUserId);
