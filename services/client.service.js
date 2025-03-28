const { models } = require('../libs/sequelize')

class ClientService {
    constructor() {
        //aquí va el método constructor
    }

    async getAllClients(){
        const client = await models.Client.findAll();
        return client;
    }

    async getClientById(id) {
        const client = await models.Client.findByPk(id);
        if(!client) {
            throw new Error('Client Not Found for this ID')
        }
        return client;
    }

    async createClient(data){
        const newClient = await models.Client.create(data);
        return newClient;
    }

    async updateClient(id, changes){
        const client = await this.getClientById(id);
        const rta = await client.update(changes);
        return rta;
    }

    async delete(id) {
        const client = await this.getClientById(id);
        await client.destroy();
        return { id };
    }
}

module.exports = ClientService;