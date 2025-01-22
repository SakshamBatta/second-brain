import { Request, Response } from "express";
import { userTypes } from "../../types/zod";
import User from "../../schema/user";
import jwt from "jsonwebtoken";

export const userRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  const registerPayload = req.body;

  try {
    const validatedPayload = userTypes.safeParse(registerPayload);

    if (!validatedPayload.success) {
      console.log(validatedPayload.error.issues);
      res.status(411).json({
        message: "Error in inputs",
      });
      return;
    }

    const existingUser = await User.findOne({
      username: registerPayload.username,
    });

    if (existingUser) {
      res.status(403).json({
        message: "User already exists with this username",
      });
      return;
    }

    await User.create({
      username: registerPayload.username,
      password: registerPayload.password,
    });

    res.status(200).json({
      message: "Signed Up",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const userLogin = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      res.status(403).json({
        message: "Can not find a user with the username",
      });
      return;
    }

    if (user.password !== password) {
      res.status(403).json({
        message: "Password is incorrect",
      });
      return;
    }

    const id = user._id.toString();

    const token = jwt.sign({ id }, "secret");

    // console.log(id);

    res.status(200).json({
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
