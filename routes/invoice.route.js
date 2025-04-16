const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { createInvoiceSchema, updateInvoiceSchema, getInvoiceSchema } = require('../schemas/invoice.schema');
const InvoiceService = require('../services/invoice.service');

const router = express.Router();
const service = new InvoiceService();

router.get('/',
    async(req, res, next) => {
        try {
            const invoice = await service.getAllInvoice();
            res.status(200).json(invoice);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/:id',
    validatorHandler(getInvoiceSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const invoice = await service.getInvoiceById(id);
            res.status(200).json(invoice)
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(createInvoiceSchema, 'body'),
    async(req, res, next) => {
        try {
            const data = req.body;
            const newInvoice = await service.createInvoice(data);
            res.status(201).json(newInvoice);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getInvoiceSchema, 'params'),
    validatorHandler(updateInvoiceSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const changes = req.body;
            const updateInvoice = await service.updateInvoice(id, changes);
            res.status(200).json(updateInvoice);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(getInvoiceSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const deleteInvoice = await service.deleteInvoice(id);
            res.status(200).json({ id });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;