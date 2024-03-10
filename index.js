const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("./database/database");
const cors = require('cors');

const userController = require('./routes/usersRoutes')
const produtoController = require('./routes/produtosRoutes')
const pedidoController = require('./routes/pedidosRoutes')

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', userController)
app.use('/', produtoController)
app.use('/', pedidoController)

app.use(session({
    secret: "paocomcafe",
    cookie: {
        maxAge: 30000000000
    }
}))

connection.authenticate().then(() => {
    console.log('Conexão feita com sucesso');
}).catch((err) => {
    console.log(err);
})

app.listen(8081, () => {
    console.log('API RODANDO')
})