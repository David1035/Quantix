const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../bd/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true,
});

setupModels(sequelize); // ejecuta la base de datos
sequelize.sync(); // sincroniza la base de datos. 


module.exports = sequelize