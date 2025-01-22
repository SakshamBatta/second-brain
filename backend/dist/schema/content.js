"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contentTypes = ["youtube", "twitter"];
const contentSchema = new mongoose_1.default.Schema({
    link: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: contentTypes,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "Tag",
    },
    userId: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User",
    },
});
const Content = mongoose_1.default.model("Content", contentSchema);
exports.default = Content;
