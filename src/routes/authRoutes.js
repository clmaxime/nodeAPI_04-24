import express from "express";
import { signin, signup } from "../controllers/authController.js";

//import { body } from 'express-validator';

const router = express.Router();

//Connexion
router.post("/signin", signin);

//Inscription
router.post("/signup", signup);

export default router;