const express = require('express');


const userRouter = require('./user.route');
const clientRouter = require('./client.route');
const providerRouter = require('./provider.router')
const productRouter = require('./product.route');
const saleRouter = require('./sale.route');
const invoiceRouter = require('./invoice.route');
const productProviderRouter = require('./product.provider.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/users', userRouter);
    router.use('/client', clientRouter);
    router.use('/provider', providerRouter);
    router.use('/product', productRouter);
    router.use('/sale', saleRouter);
    router.use('/invoice', invoiceRouter);
    router.use('/productprovider', productProviderRouter);
}

module.exports = routerApi;  // Exportamos la función para que pueda ser utilizada en otros archivos.
