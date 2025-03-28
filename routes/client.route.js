const express = require('express');
const clienteService = require('../services/client.service');
const validadorHandler = require('../middlewares/validator.handler');
const { createClientSchema, getClientSchema, updateClientSchema } = require('../schemas/client.schema');

const router = express.Router();
const service = new clienteService();

router.get('/', async (req, res, next) => {
    try {
        const clientes = service.getAllClients();
        res.json(clientes);
    } catch (error) {
        next(error)
    }
});

router.get('/:id', 
    validadorHandler(getClientSchema, 'params'),
    async (req, res, next) => {
    try {
        const cliente = await service.getClientById(req.params.id);
        res.status(201).json(cliente);
        } catch (error) {
            next(error)
        }
    }
);

router.post('/', 
    validadorHandler(createClientSchema, 'body'),
    async (req, res, next) => {
        try {
            const newClient = await service.createClient(req.body)
            res.status(201).json(newClient);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validadorHandler(getClientSchema, 'params'),
    validadorHandler(updateClientSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const changes = req.body;
            const client = await service.updateClient(id, changes)
            res.status(200).json(client);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validadorHandler(getClientSchema, 'params'),
    async (req, res, next) => {
        try {
            const userDelete = await service.delete(req.params.id)
            res.status(200).json(userDelete);
        } catch (error) {
            next(error);
        }
    }
)

module.exports = router;