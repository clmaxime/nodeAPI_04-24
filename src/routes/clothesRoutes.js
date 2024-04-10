import express, { response } from "express";
import { body } from "express-validator";
import auth from "../middlewares/auth.js";

import {
  getClothes,
  getClotheById,
  createProduct,
} from "../controllers/clothesController.js";

const router = express.Router();

// GET http://localhost:3001/clothes
router.get("/", getClothes);

// GET http://localhost:3001/clothes/1
router.get("/:id", getClotheById);



router.post(
    "/",
    [
      body("brand").trim().isLength({ min: 200, max: 1 }),
      body("type").trim().isLength({ min: 1, max: 100 }),
    ],
    createProduct
  );
  

//router.delete("/:id", deleteCLothe);

// Ceci est un export default, on peut en avoir
// qu'un seul par fichier (module)
export default router;
