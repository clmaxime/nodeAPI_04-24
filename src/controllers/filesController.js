import { validationResult } from "express-validator";
import clotheModel from "../models/clotheModel.js";

export const uploadImage = (req, res) => {
    console.log(req.file);
    if (req.file) {
      res.json({ imageUrl: req.file.path });
    } else {
      res.status(400).json({ message: "Image upload failed" });
    }
  };