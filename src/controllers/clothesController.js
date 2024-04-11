import { validationResult } from "express-validator";
import clotheModel from "../models/clotheModel.js";

//Récupère tous les vêtements en filtrant les champs
export const getClothes = (req, res) => {
  clotheModel
    .find({})
    .select("name")
    .select("brand")
    .select("price")
    .select("type")
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

//Récupère un vêtement par son id en filtrant les champs
export const getClotheById = (req, res) => {
  const id = req.params.id;
  clotheModel
    .findById(id)
    .select("name")
    .select("brand")
    .select("price")
    .select("type")
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(400).json({ message: "Article non trouvé" });
      throw new Error(error);
    });
};

//Crée un vêtement
export const createProduct = (request, response) => {
  const bodyContent = request.body;
  const errors = validationResult(request);
  console.log(errors);
  // nouvelle instance de clothe
  const newCLothe = new clotheModel(bodyContent);

  newCLothe
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

//Supprime un vêtement
export const deleteClothe = async (request, response) => {
  const id = request.params.id;
  const clothe = await clotheModel.findOne({_id: id});
  if (clothe) {
   await clotheModel.deleteOne({_id: id});
    response.json(clotheModel);
  } else {
    response.status(404).json({ message: "Clothe not found" });
  }
};

//Edite un vêtement
export const editClothe = async (request, response) => {
  const id = request.params.id;
  const clothe = await clotheModel.findOne({_id: id});
  if (clothe) {
   await clotheModel.updateOne({name: "nouveaunom"});
    //response.status(204).end();
    response.json(clotheModel);
  } else {
    response.status(404).json({ message: "Clothe not found" });
  }
};
