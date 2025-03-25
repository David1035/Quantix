const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
//const setupModels = require('../bd/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.name}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

module.exports = sequelize