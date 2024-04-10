import express from "express";
import { getExclusivities } from "../controllers/salesController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//Connexion
router.get("/exclusivities", auth, getExclusivities);

export default router;