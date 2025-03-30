  const Joi = require('joi');

  // ✳️ Campos básicos como constantes reutilizables
  const id = Joi.number().integer();
  const documento_usuario = Joi.number();
  const nombre_usuario = Joi.string();
  const correo_usuario = Joi.string().email();
  const contrasena_usuario = Joi.string();
  const rol_usuario = Joi.string();
  const lastName = Joi.string();

  // ✅ Schema para crear usuario (todos obligatorios)
  const createUserSchema = Joi.object({
    documento_usuario: documento_usuario.required(),
    nombre_usuario: nombre_usuario.required(),
    correo_usuario: correo_usuario.required(),
    contrasena_usuario: contrasena_usuario.required(),
    rol_usuario: rol_usuario.required(),
    lastName: lastName
  });

  // ✅ Schema para actualizar usuario (todos opcionales pero requiere al menos uno)
  const updateUserSchema = Joi.object({
    documento_usuario,
    nombre_usuario,
    correo_usuario,
    contrasena_usuario,
    rol_usuario,
    lastName: lastName
  }).min(1); // ✅ permite actualizar parcialmente, pero no vacío

  // ✅ Schema para validar `:id` en rutas
  const getUserSchema = Joi.object({
    id: id.required()
  });

  module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema
  };
