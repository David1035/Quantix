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

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const user = await service.create(data);
        res.status(201).json(user);
    } catch (error) {
        console.error('[UserService.create] Error:', error); // 👈 Esto imprime el error real
        res.status(400).json({ message: 'Error en la creación del usuario'})        
    }
})

module.exports = router;