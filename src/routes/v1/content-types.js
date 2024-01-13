const express = require('express');
const routes = express.Router();

const { ContentTypeController } = require('../../controllers')

routes.post('/',ContentTypeController.createContentType);
routes.get('/',ContentTypeController.getContentTypes);
routes.get('/:id',ContentTypeController.getContentType);


module.exports = routes;