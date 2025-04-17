const { models } = require('../libs/sequelize');

class SaleDetailService {
  constructor() {}

  async getAllSaleDetails() {
    const details = await models.SaleDetail.findAll();
    return details;
  }

  async getSaleDetailById(id) {
    const detail = await models.SaleDetail.findByPk(id);
    if (!detail) {
      throw new Error('error no encontrado');
    }
    return detail;
  }

  async createSaleDetail(data) {
    const newDetail = await models.SaleDetail.create(data);
    return newDetail;
  }

  async updateSaleDetail(id, changes) {
    const detail = await this.getSaleDetailById(id);
    const updated = await detail.update(changes);
    return updated;
  }

  async deleteSaleDetail(id) {
    const detail = await this.getSaleDetailById(id);
    await detail.destroy();
    return { id };
  }
}

module.exports = SaleDetailService;
