const express = require('express');
const mongoose = require('mongoose');
const connection = require('./Connections/mongoConnection.js');
const routes = require('./Routes/routes.js');
const cors = require("cors");
const cookieparser = require('cookie-parser');
const dotenv = require('dotenv');
const path =require('path');
dotenv.config({
    path: './config.env'
})

const app = express();

app.use(express.json());

app.use(cookieparser());

app.use(cors({
    origin: "https://payday1.vercel.app/",
}));

connection();

app.use(routes);

 

app.listen(process.env.PORT || 8000);



