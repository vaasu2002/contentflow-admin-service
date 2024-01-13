const {ContentTypeModel} = require('../models');
const CrudRepository = require('./crud-repository');
const {AppError} = require('../utils')

class ContentTypeRepository extends CrudRepository{
    constructor(){
        super(ContentTypeModel);
    }

    // Retrieves a specific content type
    async getSpecificContentType(orgId,contentTypeId) {
        try{
            const contentType = await this.model.findOne({
                orgId: orgId,
                _id: contentTypeId
            });
            return contentType;
        }catch(error){
            throw new AppError('Failed to get content-type');
        }
    }
}

module.exports = ContentTypeRepository;