const express = require('express');
const parser = require('body-parser');

const app = express();
const router = express.Router();

app.disable('x-powered-by');
app.use(parser.json());

app.use('/api/v1', require('../routes/api/v1/base.es6.js'));
app.use('/api/v2', require('../routes/api/v2/base.es6.js'));
app.use('/', require('../routes/default.es6'));

module.exports = app;
