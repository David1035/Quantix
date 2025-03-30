const express = require('express'); 
const productService = require('../services/product.service');
const validadorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema');

const router = express.Router();
const service = new productService();

router.get('/', async (req, res, next) => {
    try {
        const products = await service.getAllProduct();
        res.status(200).json(products);
    } catch (error) {
        next(error)
    }
});

router.get('/:id',
    validadorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await service.getProductById(id);
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validadorHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const { data } = req.body;
            const newProduct = await service.createProduct(data);
            res.status(201).json(newProduct);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id', 
    validadorHandler(getProductSchema, 'params'),
    validadorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const { data } = req.body;
            const product = await service.updateProduct(id, data);
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }
)

router.delete('/:id', 
    validadorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.deleteProduct(id);
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router; 