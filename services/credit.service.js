const { models } = require('../libs/sequelize');

class CreditService {
  constructor() {}

  // Obtener todos los créditos
  async getAllCredits() {
    const credits = await models.Credit.findAll();
    return credits;
  }

  // Obtener un crédito por ID
  async getCreditById(id) {
    const credit = await models.Credit.findByPk(id);
    if (!credit) {
      throw new Error('Credit not found');
    }
    return credit;
  }

  // Crear un nuevo crédito
  async createCredit(data) {
    const newCredit = await models.Credit.create(data);
    return newCredit;
  }

  // Actualizar un crédito
  async updateCredit(id, changes) {
    const credit = await this.getCreditById(id);
    const updated = await credit.update(changes);
    return updated;
  }

  // Eliminar un crédito
  async deleteCredit(id) {
    const credit = await this.getCreditById(id);
    await credit.destroy();
    return { id };
  }
}

module.exports = CreditService;
