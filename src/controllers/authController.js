import User from "../models/userModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { email, password, name, phoneNumber } = req.body;
  console.log(req.body);
  // On va hasher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 12);
  // On cree un nouvel utilisateur
  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    phoneNumber,
  });
  // On sauvegarde le nouvel utilisateur
  const doc = await newUser.save();

  // si tout s'est bien passé, on renvoie un status 201
  res.status(201).json(doc);
};