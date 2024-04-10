import mongoose from "mongoose";
const { Schema, model } = mongoose;

const salesSchema = new Schema({
  name: String,
  description: String,
  percentage: Number,
  start_date: String,
  exclusive: Boolean,
});

export default model("Sales", salesSchema);
