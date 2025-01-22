import express from "express";
import { getShareLink, shareLink } from "../../controllers/share/share";
import { authMiddleware } from "../../middlewares/authMiddleware";

export const shareRouter = express.Router();

shareRouter.post("/link", authMiddleware, shareLink);
shareRouter.post("/link/:shareLink", getShareLink);
