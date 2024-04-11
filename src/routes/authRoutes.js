import express from "express";
import { signin, signup } from "../controllers/authController.js";
import { body, validationResult } from 'express-validator';

const router = express.Router();

//Connexion
router.post("/signin", signin);

//Inscription
router.post("/signup", [
    body("email").trim().isLength({ min: 3, max: 50 }, "Votre email doit contenir 3 caractères min et 50 caractères max"),
    body("password").trim().isLength({ min: 6, max: 50 }, "Votre mot de passe doit contenir 3 caractères min et 50 caractères max"),
    body("name").trim().isLength({ min: 6, max: 20 }, "Votre nom doit contenir 3 caractères min et 20 caractères max"),

  ],
 signup);

export default router;