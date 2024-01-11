const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

module.exports = {
    PORT,
    DATABASE_NAME,
    MONGODB_URI,
    CORS_ORIGIN
};