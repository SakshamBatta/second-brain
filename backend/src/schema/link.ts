import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

export const Link = mongoose.model("Link", linkSchema);
