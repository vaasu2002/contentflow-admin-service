const { StatusCodes } = require('http-status-codes');
const {RoleAndPermissionService} = require('../services');
const {
    SuccessResponse,
    ErrorResponse} = require('../utils/common');

const roleAndPermissionService = new RoleAndPermissionService();


async function createRole(req,res){
    try{
        const role = await roleAndPermissionService.createRole({
            name:req.body.name,
            orgId:req.body.organization,
            canAnyoneSignUp:req.body.canAnyoneSignUp,
            findAll:req.body.findAll,
            find:req.body.find,
            create:req.body.create,
            update:req.body.update,
            delete:req.body.delete,
        })
        SuccessResponse.data = role;
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


async function getRoles(req, res){
    try{
        const role = await roleAndPermissionService.getRoles({
            orgId: req.body.organization,
        });
        SuccessResponse.data = role;
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

async function getRole(req, res){
    try{
        const contentType = await roleAndPermissionService.getRole({
            orgId: req.body.organization,
            roleId: req.params.id,
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
    createRole,
    getRoles,
    getRole
}