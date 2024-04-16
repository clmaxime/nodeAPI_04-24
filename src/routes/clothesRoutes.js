import express, { response } from "express";
import { body } from "express-validator";
import auth from "../middlewares/auth.js";

import {
  getClothes,
  getClotheById,
  createProduct,
  deleteClothe,
  editClothe,
} from "../controllers/clothesController.js";

const router = express.Router();

// GET récupère tous les vêtements
router.get("/", getClothes);

// GET récupère un vêtement par son id
router.get("/:id", getClotheById);

// POST crée un vêtement
router.post(
  "/",
  [
    body("brand").trim().isLength({ min: 200, max: 1 }),
    body("type").trim().isLength({ min: 1, max: 100 }),
  ],
  createProduct
);

// DELETE Supprime un vêtement
router.delete("/:id", deleteClothe);

/**
 * @swagger
 * /clothes/:id:
 *   get:
 *     summary: Modification d'un vêtement
 *     description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *     responses:
 *       200:
 *         description: Succès
 */
// PUT Modifie un vêtement
router.put("/:id", editClothe);

export default router;
