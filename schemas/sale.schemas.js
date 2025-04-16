const Joi = require('joi');

const id = Joi.number().integer().positive();
const fecha_venta = Joi.date();
const total_venta = Joi.number();
const fk_id_cliente = Joi.number().integer().positive();
const fk_id_usuario = Joi.number().integer().positive();

const createSaleSchema = Joi.object({
    fecha_venta: fecha_venta.required(),
    total_venta: total_venta.required(),
    fk_id_cliente: fk_id_cliente.required(),
    fk_id_usuario: fk_id_usuario.required()
})

const updateSaleSchema = Joi.object({
    fecha_venta: fecha_venta,
    total_venta: total_venta,
    fk_id_cliente: fk_id_cliente,
    fk_id_usuario: fk_id_usuario
}).min(1);

const getSaleSchema = Joi.object({ 
    id: id.required()
});

module.exports = { createSaleSchema, updateSaleSchema, getSaleSchema }; 