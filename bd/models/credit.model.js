const { Model, DataTypes, Sequelize } = require('sequelize');
const CREDIT_TABLE = 'credito';

const creditSchema = {
  id: {
    field: 'id_credito',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha_credito: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  fk_id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'client',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
};

class Credit extends Model {
  static associate(models) {
    this.belongsTo(models.Client, {
      as: 'cliente',
      foreignKey: 'fk_id_cliente'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CREDIT_TABLE,
      modelName: 'Credit',
      timestamps: false
    };
  }
}

module.exports = { CREDIT_TABLE, creditSchema, Credit };
