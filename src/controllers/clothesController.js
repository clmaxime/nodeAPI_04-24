import { validationResult } from "express-validator";
import { mockClothes } from "../data/mockClothes.js";
import clotheModel from "../models/clotheModel.js";

export const getClothes = (req, res) => {
    clotheModel.find()
        .then((result) => {
    })
    .catch((error) => {
        console.log(error);
        throw new Error(error)
    })
  };

  export const getClothe = (req, res) => {
    const id = parseInt(request.params.id, 10);
    console.log(id);
    if (isNaN(id)) {
      response.status(400).json({ message: "Invalid id" });
    }
    const car = mockClothes.find((clothe) => clothe.id === id);
    if (car) {
      response.json(car);
    } else {
      response.status(404).json({ message: "Car not found" });
    }
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
