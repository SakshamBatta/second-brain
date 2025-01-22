import { tagTypes } from "../../types/zod";
import { Response, Request } from "express";
import Tag from "../../schema/tags";

export const createTag = async (req: Request, res: Response): Promise<void> => {
  const requestPayload = req.body;
  try {
    const validatedPayload = tagTypes.safeParse(requestPayload);

    if (!validatedPayload.success) {
      res.status(403).json({
        message: "Invalid Inputs",
      });
      return;
    }
    await Tag.create({ title: requestPayload.title });

    res.status(200).json({
      success: true,
      message: "Tag created successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
