const { Model, DataTypes, Sequelize } = require('sequelize');
const SALE_TABLE = 'venta';

const saleSchema = {
  id: {
    field: 'id_venta',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_venta: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  total_venta: {
    type: DataTypes.DECIMAL(10, 2)
  },
  fk_id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
};

class Sale extends Model {
  static associate(models) {
    // relaciones futuras uno a uno
    this.hasOne(models.Invoice, {
      as: 'factura',
      foreignKey: 'fk_id_venta',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      })

      // relación con detalle, uno a muchos
      this.hasMany(models.SaleDetail, {
        as: 'detalle_venta',
        foreignKey: 'fk_id_venta',
      })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SALE_TABLE,
      modelName: 'Sale',
      timestamps: false
    };
  }
}

module.exports = { SALE_TABLE, saleSchema, Sale };
