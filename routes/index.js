const express = require('express');

const userRouter = require('./user.route');

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/users', userRouter);
}