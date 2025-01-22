import { Response, Request, request } from "express";
import { contentTypes } from "../../types/zod";
import Content from "../../schema/content";
// import Co from "../../schema/content";

export const createContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const requestPayload = req.body;
  //@ts-ignore
  const userId = req.id;
  // console.log(userId);

  try {
    const validatedPayload = contentTypes.safeParse(requestPayload);

    if (!validatedPayload.success) {
      console.log("Invalid Inputs");
      res.status(403).json({
        message: "Inputs are invalid",
      });
      return;
    }

    await Content.create({
      link: requestPayload.link,
      type: requestPayload.type,
      title: requestPayload.title,
      userId: userId,
    });

    res.status(200).json({
      success: true,
      message: "Content created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const content = await Content.find({});

    if (!content) {
      res.status(401).json({
        //confirm the status code
        success: false,
        message: "No Links found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Content displayed successfully",
      content,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  try {
    const existingContent = await Content.findById({ _id: id });

    if (!existingContent) {
      res.status(403).json({
        message: "No content found with such Id",
      });
      return;
    }

    await Content.findByIdAndDelete({ _id: id });

    res.status(200).json({
      message: "Content Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getContentByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  //@ts-ignore
  const userId = req.id;
  console.log(userId);
  try {
    const contents = await Content.find({ userId: userId });

    if (!contents) {
      res.status(403).json({
        message: "No content found for this user",
      });
      return;
    }

    res.status(200).json({
      content: contents,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
