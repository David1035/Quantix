const express = require('express');
const UserService = require('../services/user.service');
const validadorHandler = require('../middlewares/validator.handler')
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res) => {
    try {
        const users = await service.find();
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: 'Error en la consulta Find()'})
    }
})

router.get('/:id', 
    validadorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
    try {
        const user = await service.findOne(req.params.id);
        res.json(user);
    } catch (error) {
        next(error);
    }
})

router.post('/', 
    validadorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
    try {
        const data = req.body;
        const user = await service.create(data);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
})

router.patch('/:id',
    validadorHandler(getUserSchema, 'params'),
    validadorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const changes = req.body;
            const user = await service.update(id, changes)
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
)
router.delete('/:id', 
    validadorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const rta = await service.delete(req.params.id);
            res.json(rta);
            
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router;