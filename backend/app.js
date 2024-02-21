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
    origin: process.env.Base,
}));

connection();

app.use(routes);

app.use(express.static(path.join(__dirname,'./payday2/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"./payday2/build/index.html"))
});
 

app.listen(process.env.PORT || 8000);



