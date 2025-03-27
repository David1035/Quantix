function validadorHandler(schema, property){
    return(req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });

        if(error) {
            next(error); // lo maneja el middleawares de errores
        } else { 
            next();
        }
    };
}

module.exports = validadorHandler;