const Joi = require('joi');

const id = Joi.number().positive().integer();
const fk_id_producto = Joi.number().positive().integer();
const fk_id_proveedor = Joi.number().positive().integer();
const precio_compra = Joi.number().positive().precision(2);
const fecha_registro = Joi.date();

const createProductProviderSchema = Joi.object({
    fk_id_producto: fk_id_producto.required(),
    fk_id_proveedor: fk_id_proveedor.required(),
    precio_compra: precio_compra.required(),
    fecha_registro: fecha_registro.required()
});

const updateProductProviderSchema = Joi.object({
    fk_id_producto: fk_id_producto,
    fk_id_proveedor: fk_id_proveedor,
    precio_compra: precio_compra,
    fecha_registro: fecha_registro
}).min(1);

const getProductProviderSchema = Joi.object({
    id: id.required()
});

module.exports = { createProductProviderSchema, updateProductProviderSchema, getProductProviderSchema };
