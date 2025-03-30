'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { clientSchema, CLIENT_TABLE } = require('./../models/client.model');
const { providerSchema, PROVIDER_TABLE } = require('./../models/provider.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CLIENT_TABLE, clientSchema);
    await queryInterface.createTable(PROVIDER_TABLE, providerSchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CLIENT_TABLE);
    await queryInterface.dropTable(PROVIDER_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
