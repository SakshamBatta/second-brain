import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sakshambatta20:bxlUTmtOJruHnEcg@cluster0.vp8t9qr.mongodb.net/second_brain"
    )
    .then(() => {
      console.log("Connected to the db successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
