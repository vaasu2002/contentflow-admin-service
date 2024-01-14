const {RolesAndPermissionModel} = require('../models');
const CrudRepository = require('./crud-repository');
const {AppError} = require('../utils')

class RolesAndPermissionRepository extends CrudRepository{
    constructor(){
        super(RolesAndPermissionModel);
    }

    // Retrieves a specific role
    async getSpecificRole(orgId,roleId) {
        try{
            const role = await this.model.findOne({
                orgId: orgId,
                _id: roleId
            });
            return role;
        }catch(error){
            throw new AppError('Failed to get role');
        }
    }
}

module.exports = RolesAndPermissionRepository;