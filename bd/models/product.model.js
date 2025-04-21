const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'producto';

const productSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    price_compra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    price_venta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    }
}

class Product extends Model {
    static associate (models) {
        this.hasMany(models.SaleDetail, {
            as: 'detalle_venta',
            foreignKey: 'fk_id_producto'
        });

        this.belongsToMany(models.Provider, {
            as: 'proveedores',
            through: 'producto_proveedor',
            foreignKey: 'fk_id_producto',
            otherKey: 'fk_id_proveedor'
          });
          
          
    }

    static config (sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false,
        }
    }
}

module.exports = { Product, PRODUCT_TABLE, productSchema }