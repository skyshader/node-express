const express = require('express');
const APIDefault = express.Router();

APIDefault.get('/', (req, res) => {
  res.json({
    success: true,
    api: 'default',
    message: 'Hello!',
  });
});

APIDefault.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err);
});

APIDefault.all('*', (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

APIDefault.use((err, req, res, next) => {
  res.status(err.status || 500)
    .json({
      success: false,
      api: 'default',
      message: err.message,
    });
  next();
});

module.exports = APIDefault;
