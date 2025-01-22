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
exports.createTag = void 0;
const zod_1 = require("../../types/zod");
const tags_1 = __importDefault(require("../../schema/tags"));
const createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestPayload = req.body;
    try {
        const validatedPayload = zod_1.tagTypes.safeParse(requestPayload);
        if (!validatedPayload.success) {
            res.status(403).json({
                message: "Invalid Inputs",
            });
            return;
        }
        yield tags_1.default.create({ title: requestPayload.title });
        res.status(200).json({
            success: true,
            message: "Tag created successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
});
exports.createTag = createTag;
