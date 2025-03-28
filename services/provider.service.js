const { models } = require('../libs/sequelize');

class ProviderService {
    constructor(){}

    async getAllProviders() {
        return await models.Provider.findAll()
    }

    async getProvedersById(id) {
        const provider = await models.Provider.findByPk(id);
        if (!provider) {
            throw new Error('Provider not found');
        }
        return provider;
    }

    async createProvider(data) {
        const provider = await models.Provider.create(data);
        return provider;
    }

    async updateProvider(id, changes){
        const provider = await this.getProvedersById(id);
        const rta = await provider.update(changes);
        return rta;
    }

    async deleteProvider(id){
        const provider = await this.getProvedersById(id);
        provider.destroy();
        return { id }
    }
}

module.exports = ProviderService;