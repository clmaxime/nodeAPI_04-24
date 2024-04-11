import { validationResult } from "express-validator";
import salesModel from "../models/salesModel.js";

//Récupère toutes les réductions
export const getSales = (req, res) => {
  salesModel
    .find({})
    .select("name")
    .select("description")
    .select("price")
    .select("exclusive")
    .select("start_date")
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

//Récupère toutes les exclusivités
export const getExclusivities = (req, res) => {
  salesModel
    .find({})
    .select("name")
    .select("description")
    .select("percentage")
    .select("start_date")
    .where("exclusive")
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

//Crée une réduction
export const createSale = (request, response) => {
  const bodyContent = request.body;
  console.log(bodyContent);
  const errors = validationResult(request);
  console.log(errors);

  const newSale = new salesModel(bodyContent);

  newSale
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

//Supprime une réduction
export const deleteSale = async (request, response) => {
  const id = request.params.id;
  const sale = await salesModel.findOne({_id: id});
  if (sale) {
   await salesModel.deleteOne({_id: id});
    response.json(salesModel);
  } else {
    response.status(404).json({ message: "Sale not found" });
  }
};

//Edite une réduction
export const editSale = async (request, response) => {
  const id = request.params.id;
  const sale = await salesModel.findOne({_id: id});
  if (sale) {
   await salesModel.updateOne({percentage: 60}); //modifie le pourcentage à 60
   response.json(salesModel);
    response.status(204).end();
  } else {
    response.status(404).json({ message: "Sale not found" });
  }
};