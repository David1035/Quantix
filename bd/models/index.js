const { Model } = require('sequelize');
const {User, UserSchema } = require('./user.model');
const { Client, ClientSchema } = require('./client.model');

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Client.init(ClientSchema, Client.config(sequelize));
}

module.exports = setupModels;