const express = require('express');
const providerServide = require('../services/provider.service');
const validadorHandler = require('../middlewares/validator.handler');
const { createProviderSchema, getProviderSchema, updateProviderSchema } = require('../schemas/provider.schema');

const router = express.Router();
const service = new providerServide();

router.get('/', async (req, res, next) => {
    try {
        const provider = await service.getAllProviders();
        res.status(200).json(provider)
    } catch (error) {
        next(error)
    }
});

router.get('/:id',
    validadorHandler(getProviderSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const provider = await service.getProviderById(id);
            res.status(200).json(provider);
        } catch (error) {
            next(error);
        }
    }
); 

router.post('/', 
    validadorHandler(createProviderSchema, 'body'),
    async (req, res, next) => {
        try {
            const newProvider = await service.createProvider(req.body);
            res.status(201).json(newProvider);
        } catch (error) {
            next(error)
        }
    }
); 

router.patch('/:id',
    validadorHandler(getProviderSchema, 'params'),
    validadorHandler(updateProviderSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const changes = req.body;
            const rta = await service.updateProvider(id, changes);
            res.status(200).json(rta);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validadorHandler(getProviderSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const rta = await service.deleteProvider(id);
            res.status(200).json(rta);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router