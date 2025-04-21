const { Model } = require('sequelize');
const {User, UserSchema } = require('./user.model');
const { Client, clientSchema } = require('./client.model');
const { Provider, providerSchema } = require('./provider.model');
const { Product, productSchema } = require('./product.model');
const { Sale, saleSchema } = require('./sale.model');
const { SaleDetail, saleDetailSchema } = require('./sale-detail.model');
const { productProviderSchema, ProductProvider } = require('./product-provider.model');
const { invoiceSchema, Invoice } = require('./invoice.model');
const { creditSchema, Credit } = require('./credit.model');


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Client.init(clientSchema, Client.config(sequelize));
    Provider.init(providerSchema, Provider.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
    Sale.init(saleSchema, Sale.config(sequelize));
    SaleDetail.init(saleDetailSchema, SaleDetail.config(sequelize));
    ProductProvider.init(productProviderSchema, ProductProvider.config(sequelize));
    Invoice.init(invoiceSchema, Invoice.config(sequelize));
    Credit.init(creditSchema, Credit.config(sequelize));


    Sale.associate(sequelize.models);
    Invoice.associate(sequelize.models);
    SaleDetail.associate(sequelize.models);
    Product.associate(sequelize.models);
    ProductProvider.associate?.(sequelize.models);
    Provider.associate(sequelize.models);
}

module.exports = setupModels;