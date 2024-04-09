
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const clotheSchema = new Schema({
  brand: String,
  price: Number,
  type: String
});

export default model("Clothe", clotheSchema);
