import mongoose from "mongoose";

const contentTypes = ["youtube", "twitter"];

const contentSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: contentTypes,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: mongoose.Schema.ObjectId,
    ref: "Tag",
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const Content = mongoose.model("Content", contentSchema);
export default Content;
