const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
})


function Connection() {
    // mongodb://localhost:27017/payday
    mongoose.connect(process.env.URI)
        .then((e) => {
            console.log("Connection Succesfull !!");
        })
        .catch((e) => {
            console.log("Error in conn.js -> in connection.");

        });

}


module.exports = Connection;


