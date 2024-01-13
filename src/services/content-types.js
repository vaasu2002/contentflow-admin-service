const {StatusCodes} = require('http-status-codes');
const { ContentTypeRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


class ContentTypeService{
    
    constructor(){
        this.contentTypeRepository = new ContentTypeRepository();
    }

    async createContentType(data){
        try{
            const contentType = await this.contentTypeRepository.create(data);
            return contentType;
        }catch(error){
            if(error.code===11000){
                throw new AppError('Content-Type name or ApiId already exists', StatusCodes.BAD_REQUEST);
            }
            throw new AppError('Cannot create a new Content-Type', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }


    async getContentTypes(data){
        try{
            const contentTypes = await this.contentTypeRepository.getAllByOrgId(data.orgId);
            return contentTypes;
        }catch(error){
            throw new AppError('Cannot create a new Content type', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    
    async getContentType(data){
        try{
            const contentType = await this.contentTypeRepository.getSpecificContentType(
                data.orgId,
                data.contentTypeId
            );
            return contentType;
        }catch(error){
            throw new AppError('Cannot create a new Content type', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = ContentTypeService;