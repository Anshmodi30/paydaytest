const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    phonenumber: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    }

}, { timestamps: true });

const userSignup = mongoose.model("userSignup", userSchema);

module.exports = userSignup;