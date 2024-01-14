const express = require('express');
const routes = express.Router();
const contentTypeRoutes = require('./content-types');
const roleAndPermissionRoutes = require('./role-and-permissions');

routes.use('/content-type',contentTypeRoutes);
routes.use('/role',roleAndPermissionRoutes);

module.exports = routes;