const express = require('express');
const APIv1Routes = express.Router();
const baseController = require('../../../app/controllers/v1/BaseController.es6');

APIv1Routes.get('/', (req, res) => {
  let message = baseController.index();
  res.json({
    success: true,
    api: 'v1',
    message: message,
  });
});

module.exports = APIv1Routes;
