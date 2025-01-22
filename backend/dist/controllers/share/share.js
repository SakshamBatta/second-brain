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
exports.getShareLink = exports.shareLink = void 0;
const link_1 = require("../../schema/link");
const util_1 = require("../../util");
const content_1 = __importDefault(require("../../schema/content"));
const user_1 = __importDefault(require("../../schema/user"));
const shareLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { share } = req.body;
    if (share) {
        const hashValue = (0, util_1.generateRandom)(10);
        yield link_1.Link.create({
            //@ts-ignore
            userId: req.id,
            hash: hashValue,
        });
        res.json({
            message: "Updated Sharable Link",
            hash: hashValue,
        });
    }
    else {
        yield link_1.Link.deleteOne({
            //@ts-ignore
            userId: req.id,
        });
        res.json({
            message: "Deleted Sharable Link",
        });
    }
});
exports.shareLink = shareLink;
const getShareLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.shareLink;
    const link = yield link_1.Link.findOne({
        hash: hash,
    });
    if (!link) {
        res.json({
            message: "Incorrect Inputs",
        });
        return;
    }
    const brain = yield content_1.default.find({
        userId: link.userId,
    });
    const user = yield user_1.default.findOne({
        _id: link.userId.toString(),
    });
    res.send({
        username: user === null || user === void 0 ? void 0 : user.username,
        content: brain,
    });
});
exports.getShareLink = getShareLink;
