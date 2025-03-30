const Joi = require('joi');

const id = Joi.number();
const name = Joi.string();
const description = Joi.string();
const price_compra = Joi.number();
const price_venta = Joi.number();
const stock = Joi.number();

const createProductSchema = Joi.object({
    name: name.required(),
    description: description,
    price_compra: price_compra.required(),
    price_venta: price_venta.required(),
    stock: stock.required()
});

const updateProductSchema = Joi.object({
    name: name,
    description: description,
    price_compra: price_compra,
    price_venta: price_venta,
    stock: stock
}).min(1);

const getProductSchema = Joi.object({
    id: id.required()
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema };