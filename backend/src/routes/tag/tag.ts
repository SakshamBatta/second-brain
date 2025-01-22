import express from "express";
import { createTag } from "../../controllers/tag/tag";
import { authMiddleware } from "../../middlewares/authMiddleware";

export const tagRouter = express.Router();

tagRouter.post("/create", authMiddleware, createTag);
