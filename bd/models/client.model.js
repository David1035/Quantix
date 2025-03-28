const { Model, DataTypes, Sequelize } = require('sequelize');
const CLIENT_TABLE = 'client';

const clientSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primarykey: true,
        autoIncrement: true
    }, 
    document: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.VARCHAR(70),
        allowNull: false

    },
    phone: {
        type: DataTypes.VARCHAR(20),
        allowNull: false
    }, 
    estado_credito: {
        type: DataTypes.VARCHAR(20),
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
            modelName: 'client',
            timestamps: false
        }
    }
}


module.exports = { CLIENT_TABLE, clientSchema, Client }  // exportar la clase y el schema