"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const user_1 = require("./routes/users/user");
const content_1 = require("./routes/content/content");
const tag_1 = require("./routes/tag/tag");
const share_1 = require("./routes/share/share");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 3000;
app.use("/users", user_1.userRouter);
app.use("/content", content_1.constRouter);
app.use("/tag", tag_1.tagRouter);
app.use("/share", share_1.shareRouter);
app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
});
(0, db_1.dbConnect)();
