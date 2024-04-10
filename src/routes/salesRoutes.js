import express from "express";
import { body } from "express-validator";

import {
  getExclusivities,
  getSales,
  createSale,
} from "../controllers/salesController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//Voir toutes les réductions (route protégée)
router.get("/sales", auth, getSales);

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

export default router;
