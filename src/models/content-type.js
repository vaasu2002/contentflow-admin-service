const mongoose = require('mongoose');
const FieldProperty = require('./field-property-schema');

/* 
Defines the structure of an individual field within a content type
This will be used inside ContentType model
*/
const FieldSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            enum: ['Number', 'Text', 'Boolean'], // valid field types
        },
    },
    { 
    discriminatorKey: 'type', // key used to differentiate field types in discriminators
    _id: false,  //  _id is not required in the field object
    }, 
);


// Defines the structure of an individual field within a content type
const contentTypeSchema = new mongoose.Schema(
    {
        // Reference to the Organization model
        orgId: {
            type:mongoose.Types.ObjectId,
            ref: 'Organization', 
            required: true,
        },
        name: {
            type:String,
            required: true,
        },
        description: {
            type:String,
        },
        apiId: {
            type:String,
            required: true,
        },
        fields: {
            type:[FieldSchema] // Array of fields within the content type
        },
    },
    {timestamps: true}
);


// Ensure uniqueness of orgUniqueKey and name combination
contentTypeSchema.index({ orgId: 1, apiId: 1 }, { unique: true });


// Register discriminators for different field types
const Field = mongoose.model('Field', FieldSchema);
Field.discriminator('Number', FieldProperty.numberFieldType);
Field.discriminator('Text', FieldProperty.textFieldType);
Field.discriminator('Boolean', FieldProperty.booleanFieldType);
  

const ContentType = mongoose.model('content-types', contentTypeSchema);

module.exports = ContentType;