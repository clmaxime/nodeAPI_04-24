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
    .select("price")
    .select("exclusive")
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
