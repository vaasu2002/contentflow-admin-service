const mongoose = require('mongoose');
const {MONGODB_URI,DATABASE_NAME} = require('./server-config');

const dbConnect = async () => {
    try{
        const connection = await mongoose.connect(MONGODB_URI,{dbName: DATABASE_NAME});
        console.log(`Connected to database sucessfully ${connection.connection.host}`);
    }catch(error){
        console.log('Error occured while connecting' +error);
        process.exit(1);
    }
}

module.exports = dbConnect;