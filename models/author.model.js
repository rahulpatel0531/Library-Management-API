import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  age: Number,
}, { timestamps: true });

export default mongoose.model("Author", authorSchema);
