const express = require("express");
const router = express.Router();
const { login, logout, verifyAuth } = require("../src/controllers/adminController");
const { requireAuth } = require("../middleware/authMiddleware");
const { loginValidation } = require("../validations/authValidations");
const { validateRequest } = require("../middleware/validateRequest");

// mes routes publiques
router.post("/login", loginValidation, validateRequest, login);
router.get("/logout", logout);

// mes routes protégées
router.get("/verify", requireAuth, verifyAuth);

module.exports = router;