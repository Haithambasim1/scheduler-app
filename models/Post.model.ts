import mongoose, { Schema, Document } from "mongoose";
import { string } from "zod";
// export interface IPost extends mongoose.Document {
//   content: string;
//   scheduleedAt: Date;
//   userId: mongoose.Types.ObjectId;
//   status: "scheduled" | "posted";
// }

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  scheduledAt: { type: Date, required: true },
  socialMedia: { type: [String], required: true },

  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["scheduled", "posted"], default: "scheduled" },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
