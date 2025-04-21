const { Model, DataTypes } = require('sequelize');
const { SALE_TABLE } = require('./sale.model');
const { PRODUCT_TABLE } = require('./product.model');


const SALE_DETAIL_TABLE = 'detalle_venta';

const saleDetailSchema = {
  id: {
    field: 'id_detalle',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fk_id_venta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'venta',
      key: 'id_venta'
    }
  },
  fk_id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'producto',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  cantidad_venta: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subtotal_venta: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
};

class SaleDetail extends Model {
  static associate(models) {
    this.belongsTo(models.Sale, {
      as: 'sale',
      foreignKey: 'fk_id_venta'
    })
    this.belongsTo(models.Product,{
      as: 'producto',
      foreignKey: 'fk_id_producto'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALE_DETAIL_TABLE,
      modelName: 'SaleDetail',
      timestamps: false
    };
  }
}

module.exports = { SALE_DETAIL_TABLE, saleDetailSchema, SaleDetail };
