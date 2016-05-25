const express = require('express');

const APIv2 = express.Router(); // eslint-disable-line new-cap

APIv2.get('/', (req, res) => {
  res.json({
    success: true,
    api: 'v2',
    message: 'Hello!',
  });
});

module.exports = APIv2;
