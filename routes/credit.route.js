const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCreditSchema,
  updateCreditSchema,
  getCreditSchema
} = require('../schemas/credit.schema');
const CreditService = require('../services/credit.service');

const router = express.Router();
const service = new CreditService();

// Obtener todos los créditos
router.get('/', async (req, res, next) => {
  try {
    const credits = await service.getAllCredits();
    res.status(200).json(credits);
  } catch (error) {
    next(error);
  }
});

// Obtener un crédito por ID
router.get('/:id',
  validatorHandler(getCreditSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const credit = await service.getCreditById(id);
      res.status(200).json(credit);
    } catch (error) {
      next(error);
    }
  }
);

// Crear un nuevo crédito
router.post('/',
  validatorHandler(createCreditSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newCredit = await service.createCredit(data);
      res.status(201).json(newCredit);
    } catch (error) {
      next(error);
    }
  }
);

// Actualizar un crédito existente
router.patch('/:id',
  validatorHandler(getCreditSchema, 'params'),
  validatorHandler(updateCreditSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const updated = await service.updateCredit(id, changes);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }
);

// Eliminar un crédito
router.delete('/:id',
  validatorHandler(getCreditSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteCredit(id);
      res.status(200).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
