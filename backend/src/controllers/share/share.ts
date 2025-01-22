import { Response, Request } from "express";
import { Link } from "../../schema/link";
import { generateRandom } from "../../util";
import Content from "../../schema/content";
import User from "../../schema/user";

export const shareLink = async (req: Request, res: Response): Promise<void> => {
  const { share } = req.body;
  if (share) {
    const hashValue = generateRandom(10);
    await Link.create({
      //@ts-ignore
      userId: req.id,
      hash: hashValue,
    });
    res.json({
      message: "Updated Sharable Link",
      hash: hashValue,
    });
  } else {
    await Link.deleteOne({
      //@ts-ignore
      userId: req.id,
    });
    res.json({
      message: "Deleted Sharable Link",
    });
  }
};

export const getShareLink = async (
  req: Request,
  res: Response
): Promise<void> => {
  const hash = req.params.shareLink;

  const link = await Link.findOne({
    hash: hash,
  });

  if (!link) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }

  const brain = await Content.find({
    userId: link.userId,
  });

  const user = await User.findOne({
    _id: link.userId.toString(),
  });
  res.send({
    username: user?.username,
    content: brain,
  });
};
