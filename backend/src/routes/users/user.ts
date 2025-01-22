import express from "express";
import { userLogin, userRegister } from "../../controllers/users/user";

export const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/signin", userLogin);
