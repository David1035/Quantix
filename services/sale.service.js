const { models } = require('../libs/sequelize');

class SaleService {
    constructor(){}

    async getAllSale() {
        return await models.Sale.findAll({
            include: ['factura']
        });
    }

    async getSaleById(id) {
        const sale = await models.Sale.findByPk(id);
        if(!sale) {
            throw new Error('Sale not found');
        }
        return sale;
    }

    async createSale(data) {
        const sale = await models.Sale.create(data, {
            include: ['factura']
        });
        return sale;
    }

    async updateSale(id, changes){
        const sale = await this.getSaleById(id);
        const rta = await sale.update(changes);
        return rta;
    }

    async deleteSale(id){
        const sale = await this.getSaleById(id);
        sale.destroy();
        return { id };
    }

}

module.exports = SaleService;
