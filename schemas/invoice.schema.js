const Joi = require('joi');

const id = Joi.number().positive().integer();
const fecha = Joi.date();
const monto_total = Joi.number().positive().integer();
const fk_id_venta = Joi.number().positive().integer();

const createInvoiceSchema = Joi.object({
    fk_id_venta: fk_id_venta.required(),
    fecha: fecha.required(),
    monto_total: monto_total.required()
});

const updateInvoiceSchema = Joi.object({
    fk_id_venta: fk_id_venta,
    fecha: fecha,
    monto_total: monto_total
});

const getInvoiceSchema = Joi.object({
    id: id.required()
});

module.exports = { createInvoiceSchema, updateInvoiceSchema, getInvoiceSchema };