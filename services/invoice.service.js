const { models } = require('../libs/sequelize');

class InvoiceService {
    constructor() {}

    async getAllInvoice(){
        const invoice = await models.Invoice.findAll();
        return invoice;
    }

    async getInvoiceById(){
        const invoice = await models.Invoice.findByPk(id);
        if(!invoice) {
            throw new Error('Invoice not found');
        }
        return invoice;
    }

    async createInvoice(data){
        const invoice = models.Invoice.create(data);
        return invoice;
    }

    async updateInvoice(id, changes){
        const invoice = await this.getInvoiceById(id);
        const rta = await invoice.update(changes);
        return rta;
    }

    async deleteInvoice(id){
        const invoice = this.getInvoiceById(id);
        await invoice.destroy();
        return  { id };
    }
}

module.exports = InvoiceService;