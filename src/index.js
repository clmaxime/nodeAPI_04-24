import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

app.use("/clothes", clothesRoutes);

app.use("/auth", authRoutes);

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