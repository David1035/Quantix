const { models } = require('../libs/sequelize');

class ProductProviderService {
    constructor(){}

    async getAllProductProvider(){
        const productProvider = await models.ProductProvider.findAll();
        return productProvider;
    }

    async getProductProviderById (id) {
        const getProductProvider = await models.ProductProvider.findByPk(id);
        if(!getProductProvider){
            throw new Error('Product Provider not found');
        }
        return getProductProvider;
    }

    async createdProductProvider(data){
        const createProductProvider = await models.ProductProvider.create(data);
        return createProductProvider;
    }

    async updateProductProvider(id, changes){
        const data = await this.getProductProviderById(id);
        const updateProductProvider = await data.update(changes);
        return  updateProductProvider;
    }

    async deleteProductProvider(id){
        const deleteProductProvider = await this.getProductProviderById(id);
        await deleteProductProvider.destroy();
        return { id }
    }
}

module.exports = ProductProviderService;