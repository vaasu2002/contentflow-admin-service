const express = require('express');
const routes = express.Router();
const contentTypeRoutes = require('./content-types');

routes.use('/content-type',contentTypeRoutes);

module.exports = routes;