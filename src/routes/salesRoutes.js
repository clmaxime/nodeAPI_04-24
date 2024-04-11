import express from "express";
import { body } from "express-validator";

import {
  getExclusivities,
  getSales,
  createSale,
  deleteSale,
  editSale,
} from "../controllers/salesController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//Voir toutes les réductions (route protégée)
router.get("/", auth, getSales);

//Voir les exclusivités (route protégée)
router.get("/exclusivities", auth, getExclusivities);

// POST crée une réduction
router.post(
  "/",
  [
    body("name").trim().isLength({ min: 3, max: 50 }),
    body("description").trim().isLength({ min: 5, max: 200 }),
  ],
  createSale
);

// DELETE Supprime une réduction
router.delete("/:id", deleteSale);

// PUT Modifie une réduction
router.put("/:id", editSale);

export default router;
