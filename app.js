const express = require('express');
const app = express();



app.use(express.urlencoded());
app.use(express.json());

app.use(require('./routes'));

app.use(require('./middleware/error_handler_middleware'));

module.exports = app;