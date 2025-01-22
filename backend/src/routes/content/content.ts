import express from "express";
import {
  createContent,
  deleteContent,
  getContent,
  getContentByUserId,
} from "../../controllers/content/content";
import { authMiddleware } from "../../middlewares/authMiddleware";

export const constRouter = express.Router();

constRouter.post("/create", authMiddleware, createContent);
constRouter.get("/get", authMiddleware, getContent);
constRouter.delete("/delete/:id", authMiddleware, deleteContent);
constRouter.get("/user/get", authMiddleware, getContentByUserId);
