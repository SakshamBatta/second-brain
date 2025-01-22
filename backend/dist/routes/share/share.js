"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareRouter = void 0;
const express_1 = __importDefault(require("express"));
const share_1 = require("../../controllers/share/share");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
exports.shareRouter = express_1.default.Router();
exports.shareRouter.post("/link", authMiddleware_1.authMiddleware, share_1.shareLink);
exports.shareRouter.post("/link/:shareLink", share_1.getShareLink);
