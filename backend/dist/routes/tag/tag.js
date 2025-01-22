"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagRouter = void 0;
const express_1 = __importDefault(require("express"));
const tag_1 = require("../../controllers/tag/tag");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
exports.tagRouter = express_1.default.Router();
exports.tagRouter.post("/create", authMiddleware_1.authMiddleware, tag_1.createTag);
