const { models } = require('../libs/sequelize');

class SaleService {
    constructor(){}

    async getAllSale() {
        return await models.Sale.findAll();
    }

    async getSaleById(id) {
        const sale = await models.Sale.findByPk(id);
        if(!sale) {
            throw new Error('Sale not found');
        }
        return sale;
    }

    async createSale(data) {
        const sale = await models.Sale.create(data);
        return sale;
    }

    async updateSale(id, changes){
        const sale = this.getSaleById(id);
        const rta = await sale.update(changes);
        return rta;
    }

    async deleteSale(id){
        const sale = this.getSaleById(id);
        sale.destroy();
        return { id };
    }

}

module.exports = SaleService;
