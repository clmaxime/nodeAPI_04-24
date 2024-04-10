import { validationResult } from "express-validator";
import clotheModel from "../models/clotheModel.js";

export const getClothes = (req, res) => {
    clotheModel.find({})
    .select("name")
    .select("brand")
    .select("price")
    .select("type")
        .then((result) => {
          res.send(result)
    })
    .catch((error) => {
        console.log(error);
        throw new Error(error)
    })
  };

export const getClotheById = (req, res) => {
  const id = req.params.id;
  clotheModel.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
       res.status(400).json({ message: "Article non trouvé" });
      throw new Error(error);
    });
};

  export const getExclusivities = (req, res) => {
    clotheModel.find()
        .then((result) => {
    })
    .catch((error) => {
        console.log(error);
        throw new Error(error)
    })
  };

  export const createProduct = (request, response) => {
    const bodyContent = request.body;
    const errors = validationResult(request);
    console.log(errors);
    // nouvelle instance de clothe
    const newCLothe = new clotheModel(bodyContent);

    newCLothe.save()
    .then((result) => {
        response.status(201).json(result);
    })
    .catch((error) => {
        console.log(error);
        throw new Error(error)
    });
  }
