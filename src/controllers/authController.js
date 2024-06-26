import User from "../models/userModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { email, password, name, phoneNumber } = req.body;
  console.log(req.body);
  // hash du mot de passe
  const hashedPassword = await bcrypt.hash(password, 12);
  // création d'un nouvel utilisateur
  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    phoneNumber,
  });
  // sauvegarde de l'utilisateur
  const doc = await newUser.save();

  // si ok, on renvoie l'utilisateur en json
  res.status(201).json(doc);
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  // On cherche l'utilisateur dans la base de donnees
  const user = await User.findOne({ email: email });

  // si l'utilisateur n'existe pas, on renvoie une erreur
  if (!user) {
    res
      .status(400)
      .json({ message: "Utilisateur introuvable, vérifiez l'email" });
  } else {
    // si l'utilisateur existe, on compare les mots de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ message: "Mot de passe incorrect" });
    } else {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      // on renvoie le token
      res.status(200).json({ token });
    }
  }
  // si le mot de passe est invalide, on renvoie une erreur

  // sinon on genere un token
};
