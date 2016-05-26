const express = require('express');
const APIv2Routes = express.Router();

APIv2Routes.get('/', (req, res) => {
  res.json({
    success: true,
    api: 'v2',
    message: 'Hello!',
  });
});

module.exports = APIv2Routes;
