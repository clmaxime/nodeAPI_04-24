import express from "express";
import { signin, signup } from "../controllers/authController.js";
import { body, validationResult } from 'express-validator';

const router = express.Router();

//Connexion
router.post("/signin", signin);

//Inscription
router.post("/signup", [
  body("email").trim().isEmail({ msg: "Votre email est incorrect" }),
  body("password").trim().isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
}),    
  body("name").trim().isLength({ min: 6, max: 20 }, "Votre nom doit contenir 3 caractères min et 20 caractères max"),
  ],
 signup);

export default router;