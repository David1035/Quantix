const Joi = require('joi');
const id = Joi.number();
const name = Joi.string();
const phone = Joi.string();

const createProviderSchema = Joi.object({
    name: name.required(),
    phone: phone.required()
})

const updateProviderSchema = Joi.object({
    name: name,
    phone: phone
})

const getProviderSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createProviderSchema,
    updateProviderSchema,
    getProviderSchema
}