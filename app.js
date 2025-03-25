const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Mi primer server ')
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
});