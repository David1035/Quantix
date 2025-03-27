const Joi = require('joi');

const id_usuario = Joi.number().integer(); 
const documento_usuario = Joi.number().required();
const nombre_usuario = Joi.string().required();
const correo_usuario = Joi.string().email().required();
const contrasena_usuario = Joi.string().required();
const rol_usuario = Joi.string().required();

const createUserSchema = Joi.object({
    documento_usuario,
    nombre_usuario,
    correo_usuario,
    contrasena_usuario,
    rol_usuario
});

const getUserSchema = Joi.object({
    id_usuario: id_usuario.required()
})

module.exports = { createUserSchema, getUserSchema }; 