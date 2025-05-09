const jwt = require("jsonwebtoken");
const Admin = require("../src/models/Admin");

exports.requireAuth = async (req, res, next) => {
  try {
    // verifie le token dans le cookie
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Non autorisé - Token manquant" });
    }

    // verifie et decode le token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // verifie si ladmin existe toujours
    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      return res.status(401).json({ message: "Non autorisé - Admin non trouvé" });
    }

    // ajout de ladmin a la requete
    req.admin = admin;
    next();
  } catch (error) {
    console.error("Erreur d'authentification:", error);
    return res.status(401).json({ message: "Non autorisé - Token invalide" });
  }
};