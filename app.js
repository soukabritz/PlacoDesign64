const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const contactRoutes = require('./routes/contactRoutes');
const realisationRoutes = require('./routes/realisationRoutes');

const app = express();

// charger les vbs d'environnement en premier
dotenv.config();

// middlewares
app.use(express.json());
app.use(cookieParser());

// configuration CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// headers de sécurité
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Content-Security-Policy', "frame-ancestors 'self' https://www.google.com");
    next();
});

// connexion à la base de données
connectDB();

// routes
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/realisations', realisationRoutes);

// gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ message: "Route non trouvée" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error("Erreur lors du démarrage du serveur:", err);
});