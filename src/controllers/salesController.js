import { validationResult } from "express-validator";
import clotheModel from "../models/clotheModel.js";


export const getExclusivities = (req, res) => {
    clotheModel.find()
        .then((result) => {
            res.json(result);
    })
    .catch((error) => {
        console.log(error);
        throw new Error(error)
    })
  };