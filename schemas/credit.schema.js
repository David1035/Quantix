const Joi = require('joi');

// Campos base
const id = Joi.number().positive().integer();
const monto = Joi.number().positive().precision(2);
const fecha_credito = Joi.date();
const fk_id_cliente = Joi.number().positive().integer();

// Crear crédito
const createCreditSchema = Joi.object({
  monto: monto.required(),
  fk_id_cliente: fk_id_cliente.required(),
  fecha_credito: fecha_credito.optional() // opcional porque Sequelize le asigna un valor por defecto
});

// Actualizar crédito
const updateCreditSchema = Joi.object({
  monto,
  fk_id_cliente,
  fecha_credito
}).min(1); // al menos un campo debe actualizarse

// Obtener o eliminar crédito por ID
const getCreditSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createCreditSchema,
  updateCreditSchema,
  getCreditSchema
};
