const express = require('express');
const UserService = require('../services/user.service');

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