# Placo Design 64

Site vitrine pour Placo Design 64, une entreprise de plâtrerie et rénovation.

## Structure du Projet

```
placo-design-64/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── styles/        # Styles SCSS
│   │   └── ...
│   └── ...
├── src/                    # Backend Node.js
│   ├── controllers/       # Contrôleurs
│   ├── models/           # Modèles MongoDB
│   └── ...
└── ...
```

## Technologies Utilisées

### Frontend
- React
- Vite
- SCSS
- React Router
- ReCAPTCHA

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Cloudinary
- Nodemailer

## Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
```

2. Installer les dépendances
```bash
# Backend
npm install

# Frontend
cd client
npm install
```

3. Configuration des variables d'environnement
- Créer un fichier `.env` à la racine du projet
- Créer un fichier `.env` dans le dossier `client`

4. Démarrer le développement
```bash
# Backend
npm run server

# Frontend
cd client
npm run dev
```

## Déploiement

### Frontend (Vercel)
- Connecter le repository GitHub à Vercel
- Configurer les variables d'environnement dans Vercel
- Déployer automatiquement depuis la branche main

### Backend (Render)
- Créer un nouveau Web Service sur Render
- Connecter le repository GitHub
- Configurer les variables d'environnement
- Déployer automatiquement depuis la branche main

## Variables d'Environnement

### Backend (.env)
```
MONGODB_URI=
JWT_SECRET=
RECAPTCHA_SECRET_KEY=
CONTACT_EMAIL=
CONTACT_EMAIL_PASSWORD=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Frontend (.env)
```
VITE_API_URL=
VITE_RECAPTCHA_SITE_KEY=
```

## Fonctionnalités

- Authentification admin
- Gestion des réalisations
- Formulaire de contact
- Galerie de photos
- Responsive design
