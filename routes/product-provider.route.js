const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductProviderSchema, updateProductProviderSchema, getProductProviderSchema } = require('../schemas/product-provider.schema');
const ServiceProductProvider = require('../services/product-provider.service');

const router = express.Router();
const service = new ServiceProductProvider();

router.get('/',
    async(req, res, next) => {
        try {
            const data = await service.getAllProductProvider();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:id',
    validatorHandler(getProductProviderSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id }  = req.params;
            const data = await service.getProductProvider(id);
            res.status(200).json(data)
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(createProductProviderSchema, 'body'),
    async(req, res, next) => {
        try {
            const data = await service.createdProductProvider(req.body);
            res.status(201).json(data)
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getProductProviderSchema, 'params'),
    validatorHandler(updateProductProviderSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const changes = req.body;
            const data = await service.updateProductProvider(id, changes);
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(getProductProviderSchema, 'params'),
    async (req, res, next) => {
        try {
            await service.deleteProductProvider(req.params.id);
            res.status(200).json({ message: 'Product provider deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;