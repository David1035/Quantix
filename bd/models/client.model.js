const { Model, DataTypes, Sequelize } = require('sequelize');
const CLIENT_TABLE = 'client';

const clientSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    document: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(70),
        allowNull: false

    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    }, 
    estado_credito: {
        type: DataTypes.STRING(20),
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
}

class Client extends Model {
    static associate(models){
        // relaciones futuras
    }

    static config(sequelize){
        return {
            sequelize, 
            tableName: CLIENT_TABLE,
            modelName: 'Client',
            timestamps: false
        }
    }
}


module.exports = { CLIENT_TABLE, clientSchema, Client }  // exportar la clase y el schema