const { StatusCodes } = require('http-status-codes');
const { ContentTypeService } = require('../services');
const {ErrorResponse,SuccessResponse} = require('../utils/common');
const contentTypeService = new ContentTypeService();

async function createContentType(req, res){
    try{
        const contentType = await contentTypeService.createContentType({
            orgId: req.body.organization,
            name: req.body.name,
            description: req.body.description,
            apiId: req.body.apiId,
            fields: req.body.fields
        });
        SuccessResponse.data = contentType;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
        
    }catch(error){
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
} 


async function getContentTypes(req, res){
    try{
        const contentType = await contentTypeService.getContentTypes({
            orgId: req.headers.organization,
        });
        SuccessResponse.data = contentType;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
        
    }catch(error){
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
} 

async function getContentType(req, res){
    try{
        console.log( req.body.organization)
        const contentType = await contentTypeService.getContentType({
            orgId: req.body.organization,
            contentTypeId: req.params.id,
        });
        SuccessResponse.data = contentType;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
        
    }catch(error){
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
} 

module.exports = {
    createContentType,
    getContentTypes,
    getContentType
};
