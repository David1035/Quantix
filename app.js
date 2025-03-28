const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, ormErrorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Mi primer server ')
});

routerApi(app)

//Middleware al final, y se ejecutan en el orden que se especifiquen aquí
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});