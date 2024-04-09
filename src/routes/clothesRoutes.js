import express from "express";
import { body } from "express-validator";

import {
  getClothes,
  getClothe,
  createProduct,
} from "../controllers/clothesController.js";

const router = express.Router();

// GET http://localhost:3001/cars
router.get("/", getClothes);

// GET http://localhost:3001/cars/1
router.get("/:id", getClothe);

router.post(
    "/",
    [
      body("brand").trim().isLength({ min: 20, max: 2 }),
      body("type").trim().isLength({ min: 2, max: 100 }),
    ],
    createProduct
  );
  

//router.delete("/:id", deleteCLothe);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;
