const { body } = require('express-validator');

exports.realisationValidation = [
  body('titre')
    .notEmpty().withMessage('Le titre est requis')
    .isLength({ min: 2, max: 100 }).withMessage('Le titre doit faire entre 2 et 100 caractères'),
  body('description')
    .optional()
    .isLength({ max: 1000 }).withMessage('La description est trop longue'),
  body('showOnHome')
    .optional()
    .isBoolean().withMessage('showOnHome doit être un booléen')
]; 