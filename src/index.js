import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { CreateApp } from "./app.js";
import clothesRoutes from "./routes/clothesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import salesRoutes from "./routes/salesRoutes.js"

//Variables d'environnement
const PORT = process.env.PORT || 3001;
const MONGO_STRING = process.env.MONGO_STRING;

const app = CreateApp();


app.use("/clothes", clothesRoutes);

app.use("/auth", authRoutes);

app.use("/sales", salesRoutes);


/* 
 Routes definit une route Get sur / qui renvoie un message
 La fonction app.get prend deux arguments
 le chemin de la route
 et une fonction qui prend deux arguments :
 request et response 
 */
app.get("/", (request, response) => {
  response.json({ message: "Bienvenue sur ce projet. Utilisez /clothes pour voir les vêtements, /signin, pour vous connecter et /signup pour vous inscrire" });
  // JSON : Javascript Object Notation
});


mongoose.connect(MONGO_STRING).then(() => {
    console.log('connexion reussie')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
})