const express = require ('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json()); // utilizado para passar requisições json no Request Body
app.use(cors());
app.options('*',cors());
app.use(routes);

app.listen(3333,'127.0.0.1');
