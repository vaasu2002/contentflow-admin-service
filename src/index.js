const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { ServerConfig,dbConnect } = require('./config');

const app = express();

app.use(cors({
    origin: ServerConfig.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());



app.listen(ServerConfig.PORT, () => {
    dbConnect();
    console.log(`Application started on ${ServerConfig.PORT}!`);
});