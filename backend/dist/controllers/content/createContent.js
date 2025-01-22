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
exports.createContent = void 0;
const zod_1 = require("../../types/zod");
const content_1 = __importDefault(require("../../schema/content"));
// import Co from "../../schema/content";
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Control reached here");
    const requestPayload = req.body;
    try {
        const validatedPayload = zod_1.contentTypes.safeParse(requestPayload);
        if (!validatedPayload.success) {
            console.log("Invalid Inputs");
            res.status(403).json({
                message: "Inputs are invalid",
            });
            return;
        }
        yield content_1.default.create({
            link: requestPayload.link,
            type: requestPayload.type,
            title: requestPayload.title,
        });
        res.status(200).json({
            success: true,
            message: "Content created successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});
exports.createContent = createContent;
