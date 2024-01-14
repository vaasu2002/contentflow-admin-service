const express = require('express');
const routes = express.Router();

const {RolesAndPermissionController} = require('../../controllers')

routes.post('/',RolesAndPermissionController.createRole);
routes.get('/',RolesAndPermissionController.getRoles);
routes.get('/:id',RolesAndPermissionController.getRole);


module.exports = routes;