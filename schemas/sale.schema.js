const Joi = require('joi');

// Campos de la venta
const fecha_venta = Joi.date().required();
const total_venta = Joi.number().required();
const fk_id_cliente = Joi.number().integer().positive().required();
const fk_id_usuario = Joi.number().integer().positive().required();

// Campo anidado: factura
const factura = Joi.object({
  fecha: Joi.date().required(),
  monto_total: Joi.number().required()
});

// Campo anidado: detalle_venta
const detalle_venta = Joi.array().items(
  Joi.object({
    fk_id_producto: Joi.number().integer().positive().required(),
    cantidad_venta: Joi.number().integer().positive().required(),
    subtotal_venta: Joi.number().positive().required()
  })
);

const createSaleSchema = Joi.object({
  fecha_venta,
  total_venta,
  fk_id_cliente,
  fk_id_usuario,
  factura,
  detalle_venta
});

const getSaleSchema = Joi.object({
  id: Joi.number().integer().positive().required()
});

const updateSaleSchema = Joi.object({
  fecha_venta: fecha_venta.optional(),
  total_venta: total_venta.optional(),
  fk_id_cliente: fk_id_cliente.optional(),
  fk_id_usuario: fk_id_usuario.optional(),
  factura: factura.optional(),
  detalle_venta: detalle_venta.optional()
}).min(1);

module.exports = { createSaleSchema, updateSaleSchema, getSaleSchema };
