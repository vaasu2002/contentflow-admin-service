const {StatusCodes} = require('http-status-codes');
const { RolesAndPermissionRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


class RolesAndPermissionService{
    
    constructor(){
        this.rolesAndPermissionRepo = new RolesAndPermissionRepository();
    }

    async createRole(data){
        try{
            const role = await this.rolesAndPermissionRepo.create(data);
            return role;
        }catch(error){
            throw new AppError('Failed to create a new role', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }


    async getRoles(data){
        try{
            const roles = await this.rolesAndPermissionRepo.getAllByOrgId(data.orgId);
            return roles;
        }catch(error){
            throw new AppError('Failed to retrieve roles', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    
    async getRole(data){
        try{
            const role = await this.rolesAndPermissionRepo.getSpecificRole(
                data.orgId,
                data.roleId
            );
            return role;
        }catch(error){
            throw new AppError('Failed to retrieve the role', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = RolesAndPermissionService;