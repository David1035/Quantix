const { Model, DataTypes, Sequelize } = require('sequelize');

const PROVIDER_TABLE = 'provider';

const providerSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
}

class Provider extends Model {
    static associate(models) {
        this.belongsToMany(models.Product, {
            as: 'productos',
            through: 'producto_proveedor',
            foreignKey: 'fk_id_proveedor',
            otherKey: 'fk_id_producto'
          });
          
          
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PROVIDER_TABLE,
            modelName: 'Provider',
            timestamps: false,
        }
    }
}

module.exports = {
    PROVIDER_TABLE,
    Provider,
    providerSchema
}