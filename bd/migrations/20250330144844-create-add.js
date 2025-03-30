'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'lastName', UserSchema.lastName)
  },

  async down (queryInterface) {
   await queryInterface.deleteColumn(USER_TABLE, 'lastName')
  }
};
