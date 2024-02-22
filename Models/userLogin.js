const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
  
    },
    password: {
        type: String,
        required:true,
    }

}, { timestamps: true });

const userLogin = mongoose.model("userLogin", userSchema);

module.exports = userLogin;