const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createSaleDetailSchema,
  updateSaleDetailSchema,
  getSaleDetailSchema
} = require('../schemas/sale-detail.schema');
const SaleDetailService = require('../services/sale-detail.service');

const router = express.Router();
const service = new SaleDetailService();

// Obtener todos los detalles de venta
router.get('/', async (req, res, next) => {
  try {
    const details = await service.getAllSaleDetails();
    res.status(200).json(details);
  } catch (error) {
    next(error);
  }
});
 
// Obtener un detalle de venta por ID
router.get('/:id',
  validatorHandler(getSaleDetailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const detail = await service.getSaleDetailById(id);
      res.status(200).json(detail);
    } catch (error) {
      next(error);
    }
  }
);

// Crear un nuevo detalle de venta
router.post('/',
  validatorHandler(createSaleDetailSchema, 'body'),
  async (req, res, next) => {
    try {
      const newDetail = await service.createSaleDetail(req.body);
      res.status(201).json(newDetail);
    } catch (error) {
      next(error);
    }
  }
);

// Actualizar un detalle de venta
router.patch('/:id',
  validatorHandler(getSaleDetailSchema, 'params'),
  validatorHandler(updateSaleDetailSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const updated = await service.updateSaleDetail(id, changes);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }
);

// Eliminar un detalle de venta
router.delete('/:id',
  validatorHandler(getSaleDetailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.deleteSaleDetail(id);
      res.status(200).json(id);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
