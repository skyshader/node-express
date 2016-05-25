const express = require('express');

const APIv1 = express.Router();

APIv1.get('/', (req, res) => {
  res.json({
    success: true,
    api: 'v1',
    message: 'Hello!',
  });
});

module.exports = APIv1;
