'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { clientSchema, CLIENT_TABLE } = require('./../models/client.model');
const { providerSchema, PROVIDER_TABLE } = require('./../models/provider.model');
const { productSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { saleSchema, SALE_TABLE } = require('./../models/sale.model');
const { creditSchema, CREDIT_TABLE } = require('./../models/credit.model');
const { invoiceSchema, INVOICE_TABLE } = require('./../models/invoice.model');
const { productProviderSchema, PRODUCT_PROVIDER_TABLE } = require('./../models/product-provider.model');
const { saleDetailSchema, SALE_DETAIL_TABLE } = require('./../models/sale-detail.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CLIENT_TABLE, clientSchema);
    await queryInterface.createTable(PROVIDER_TABLE, providerSchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
    await queryInterface.createTable(SALE_TABLE, saleSchema);
    await queryInterface.createTable(CREDIT_TABLE, creditSchema);
    await queryInterface.createTable(INVOICE_TABLE, invoiceSchema);
    await queryInterface.createTable(PRODUCT_PROVIDER_TABLE, productProviderSchema);
    await queryInterface.createTable(SALE_DETAIL_TABLE, saleDetailSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CLIENT_TABLE);
    await queryInterface.dropTable(PROVIDER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(SALE_TABLE);
    await queryInterface.dropTable(CREDIT_TABLE);
    await queryInterface.dropTable(INVOICE_TABLE);
    await queryInterface.dropTable(PRODUCT_PROVIDER_TABLE);
    await queryInterface.dropTable(SALE_DETAIL_TABLE);
  }
};



