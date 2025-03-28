const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string().min(1).max(70);
const document = Joi.number();
const phone = Joi.string().min(10).max(15);

const craeteClientSchema = Joi.object({
    name: name.required(),
    document: document.required(),
    phone: phone.required()
});

const updateClientSchema = Joi.object({
    name: name,
    document: document,
    phone: phone
}).min(1);

const getClientSchema = Joi.object({
    id: id.required()
});

module.exports = { craeteClientSchema, updateClientSchema, getClientSchema }; // se exporta los schemas para validar y ser utilizados en otras partes del códigocódigo