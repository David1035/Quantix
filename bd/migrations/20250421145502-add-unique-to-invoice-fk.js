'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.addConstraint('factura', {
      fields: ['fk_id_venta'],
      type: 'unique',
      name: 'unique_factura_venta'
    });
  },

  async down (queryInterface) {
    await queryInterface.removeConstraint('factura', 'unique_factura_venta');
  }
};
