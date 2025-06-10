const { validationResult } = require("express-validator");

exports.validateRequest = (req, res, next) => {

    // on valide les donnees de la requete
    const errors = validationResult(req);

    //si ya des erreurs, renvoyer une reponse d'erreur
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
next();
}