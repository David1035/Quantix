const express = require('express');


const userRouter = require('./user.route');
const clientRouter = require('./client.route');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/users', userRouter);
    router.use('/client', clientRouter);
}

module.exports = routerApi;  // Exportamos la función para que pueda ser utilizada en otros archivos.
