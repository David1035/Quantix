const express = require('express');


const userRouter = require('./user.route');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/users', userRouter);
}

module.exports = routerApi;  // Exportamos la función para que pueda ser utilizada en otros archivos.
