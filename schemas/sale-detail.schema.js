const Joi = require('joi');

const id = Joi.number().positive().integer();
const fk_id_venta = Joi.number().positive().integer();
const fk_id_producto = Joi.number().positive().integer();
const cantidad_venta = Joi.number().integer().min(1);
const subtotal_venta = Joi.number().positive().precision(2);


const createSaleDetailSchema = Joi.object({
    fk_id_venta: fk_id_venta.required(),
    fk_id_producto: fk_id_producto.required(),
    cantidad_venta: cantidad_venta.required(),
    subtotal_venta: subtotal_venta.required()
});

const updateSaleDetailSchema = Joi.object({
    fk_id_producto: fk_id_producto,
    cantidad_venta: cantidad_venta,
    subtotal_venta: subtotal_venta
});

const getSaleDetailSchema = Joi.object({
    id: id.required()
});

module.exports = { createSaleDetailSchema, updateSaleDetailSchema, getSaleDetailSchema }; 