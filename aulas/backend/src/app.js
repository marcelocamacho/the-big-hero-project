const express = require ('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(express.json()); // utilizado para passar requisições json no Request Body

app.use(cors());

app.options('*',cors());

app.use(routes);
app.use(errors());

module.exports = app;
