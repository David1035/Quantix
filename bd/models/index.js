const { Model } = require('sequelize');
const {User, UserSchema } = require('./user.model');
const { Client, clientSchema } = require('./client.model');

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Client.init(clientSchema, Client.config(sequelize));
}

module.exports = setupModels;