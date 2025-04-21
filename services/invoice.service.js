const { models } = require('../libs/sequelize');

class InvoiceService {
    constructor() {}

    async getAllInvoice(){
        const invoice = await models.Invoice.findAll({
            include: ['venta']
        });
        return invoice;
    }

    async getInvoiceById(id){
        const invoice = await models.Invoice.findByPk(id);
        if(!invoice) {
            throw new Error('Invoice not found');
        }
        return invoice;
    }

    async createInvoice(data){
        const invoice = await models.Invoice.create(data);
        return invoice;
    }

    async updateInvoice(id, changes){
        const invoice = await this.getInvoiceById(id);
        const rta = await invoice.update(changes);
        return rta;
    }

    async deleteInvoice(id){
        const invoice = await this.getInvoiceById(id);
        await invoice.destroy();
        return  { id };
    }
}

module.exports = InvoiceService;