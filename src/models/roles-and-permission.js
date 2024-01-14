const mongoose = require('mongoose');

const rolesAndPermissionSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true,
        },
        orgId: {
            type:mongoose.Types.ObjectId,
            ref: 'Organization', 
            required: true,
            index: true
        },
        canAnyoneSignUp: {
            type:Boolean,
            default:false,
        },
        findAll:{
            type:[String],
            ref: 'content-types',
        },
        find: {
            type:[String],
            ref: 'content-types',
        },
        create: {
            type:[String],
            ref: 'content-types',
        },
        update: {
            type:[String],
            ref: 'content-types',
        },
        delete: {
            type:[String],
            ref: 'content-types',
        },
    },
    {collection: 'roles-and-permission'},
    {timestamps: true}
);

const rolesAndPermission = mongoose.model('roles-and-permission', rolesAndPermissionSchema);

module.exports = rolesAndPermission;