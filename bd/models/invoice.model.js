const { Model, DataTypes, Sequelize } = require('sequelize');
const INVOICE_TABLE = 'factura';

const invoiceSchema = {
  id: {
    field: 'id_factura',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  monto_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  fk_id_venta: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

class Invoice extends Model {
  static associate(models) {
    // relaciones futuras
    this.belongsTo(models.Sale, {
      as: 'sale',
      foreignKey: 'fk_id_venta'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_TABLE,
      modelName: 'Invoice',
      timestamps: false
    };
  }
}

module.exports = { INVOICE_TABLE, invoiceSchema, Invoice };
