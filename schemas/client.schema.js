const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string().min(1).max(70);
const document = Joi.number();
const phone = Joi.string().min(10).max(15);
const estado_credito = Joi.string();

const createClientSchema = Joi.object({
    name: name.required(),
    document: document.required(),
    phone: phone.required(),
    estado_credito: estado_credito
});

const updateClientSchema = Joi.object({
    name: name,
    document: document,
    phone: phone,
    estado_credito: estado_credito
}).min(1);

const getClientSchema = Joi.object({
    id: id.required()
});

module.exports = { createClientSchema, updateClientSchema, getClientSchema }; // se exporta los schemas para validar y ser utilizados en otras partes del códigocódigo