const { Model, DataTypes } = require('sequelize');
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
    allowNull: false
  },
  fk_id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
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
    // relaciones futuras
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
