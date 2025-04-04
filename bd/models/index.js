const { Model } = require('sequelize');
const {User, UserSchema } = require('./user.model');
const { Client, clientSchema } = require('./client.model');
const { Provider, providerSchema } = require('./provider.model');
const { Product, productSchema } = require('./product.model');


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Client.init(clientSchema, Client.config(sequelize));
    Provider.init(providerSchema, Provider.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
}

module.exports = setupModels;