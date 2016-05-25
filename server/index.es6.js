const express = require('express');
const parser = require('body-parser');

const app = express();
app.disable('x-powered-by');
app.use(parser.json());

app.use('/api/v1', require('../routes/api_v1.es6'));
app.use('/api/v2', require('../routes/api_v2.es6'));

app.get('/', (req, res) => {
  res.json({
    success: true,
    api: 'default',
    message: 'Hello!',
  });
});

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err);
});

app.all('*', (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .json({
      success: false,
      api: 'default',
      message: err.message,
    });
  next();
});

module.exports = app;
