const express = require('express');
const SaleServicio = require('../services/sale.service');
const validadorHandler = require('../middlewares/validator.handler');
const { createSaleSchema, updateSaleSchema, getSaleSchema } = require('../schemas/sale.schema');

const router = express.Router();
const service = new SaleServicio();

router.get('/', 
    async(req, res, next) => {
        try {
            const data = await service.getAllSale();
            res.json(data);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:id',
    validadorHandler(getSaleSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const sale = await service.getSaleById(id);
            res.json(sale);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validadorHandler(createSaleSchema, 'body'),
    async(req, res, next) => {
        try {
            const { data } = req.body;
            const newSale = await service.createSale(data);
            res.json(newSale);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validadorHandler(getSaleSchema, 'params'),
    validadorHandler(updateSaleSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const changes = req.body;
            const updateSale = await service.updateSale(id, changes);
            res.json(updateSale);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validadorHandler(getSaleSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            await service.deleteSale(id);
            res.json(id);
        } catch (error) {
            next(error);
        }
    }
);


module.exports = router;
