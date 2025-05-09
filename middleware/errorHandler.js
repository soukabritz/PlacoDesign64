const errorHandler = (err, req, res, next) => {
    //logger l'erreur dans la console
    console.error(`errorHandler: ${err.stack}`)
    
    //determiner le code derreur par défaut 500
    const statusCode = err.statusCode || 500;
    
    //determiner le message derreur
    const message = err.message || "Erreur interne du serveur"
    
    //determiner le code derreur (utile pour les erreurs spécifique comme MongoDB)
    const errorCode = err.code || "SERVER_ERROR";
    
    //reponse JSON
    res.status(statusCode).json({
        success : false,
        message,
        code : errorCode,
        stack : err.stack,
    })
    }
    
    module.exports = errorHandler;