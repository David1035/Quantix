const { ValidatorError } = require('sequelize');
const boom = require('@hapi/boom');
const { stack } = require('sequelize/lib/utils');

function logErrors(err, req, res, next) {
    console.error('[ERROR]:', err),
    next(err); // lo pasa al siguiente middleways
}

function errorHandler(err, req, res, next) {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

function boomErrorHandler(err, req, res, next) {
    if(err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload)
    } else {
        next(err);
    }
}

//
function ormErrorHandler (err, req, res, next) {
    if(err instanceof ValidatorError) {
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            erros: err.errors
        })
    }
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler };  // exportamos los middlewares para usarlos en otros archivos