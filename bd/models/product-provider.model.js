const { Model, DataTypes, Sequelize } = require('sequelize');
const PRODUCT_PROVIDER_TABLE = 'producto_proveedor';

const productProviderSchema = {
  id: {
    field: 'id_producto_proveedor',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
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
  fk_id_proveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'provider',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  precio_compra: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha_registro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
};

class ProductProvider extends Model {
  static associate(models) {
    this.belongsTo(models.Product, {
      as: 'producto',
      foreignKey: 'fk_id_producto'
    });

    this.belongsTo(models.Provider, {
      as: 'proveedor',
      foreignKey: 'fk_id_proveedor'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_PROVIDER_TABLE,
      modelName: 'ProductProvider',
      timestamps: false
    };
  }
}

module.exports = { PRODUCT_PROVIDER_TABLE, productProviderSchema, ProductProvider };
