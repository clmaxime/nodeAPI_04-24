import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  // Récupérer le header Authorization
  const header = req.header("Authorization");
  const array = header.split(" ");
  if (array.length !== 2) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = array[1];
  console.log(token);
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!decodedToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Erreur lors de la vérification du token :", error.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
}
