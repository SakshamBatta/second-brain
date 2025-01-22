import express, { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(403).json({
      // need to confirm the status code for this
      message: "Token not provided",
    });
    return;
  }
  try {
    const decoded = jwt.verify(token, "secret");
    //@ts-ignore

    req.id = decoded.id;
    //@ts-ignore
    // console.log(req.id);

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
