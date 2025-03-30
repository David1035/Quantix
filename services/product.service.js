const { models } = require('../libs/sequelize');

class ProductService {
    constructor(){}

    async getAllProduct(id) {
        const products = await models.Product.findAll();
        return products;
    }

    async getProductById(id) {
        const product = await models.Product.findByPk(id);
        if(!product){
            throw new Error('Product not found');
        }
        return product;
    }

    async createProduct(data) {
        const newProduct = await models.Product.create(data);
        return newProduct;
    }

    async updateProduct(id, changes) {
        const product = await this.getProductById(id);
        const rta = await product.update(changes);
        return rta;
    }

    async deleteProduct(id){
        const product = await this.getProductById(id);
        await product.destroy();
        return { id }

    }
}

module.exports = ProductService; 