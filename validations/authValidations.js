const { body } = require('express-validator');

exports.loginValidation = [
    body('email')
        .notEmpty()
        .withMessage('L\'email est requis')
        .isEmail()
        .withMessage('Veuillez fournir un email valide')
        .trim(),
    
    body('password')
        .notEmpty()
        .withMessage('Le mot de passe est requis')
        .isLength({ min: 6 })
        .withMessage('Le mot de passe doit contenir au moins 6 caractères')
];
