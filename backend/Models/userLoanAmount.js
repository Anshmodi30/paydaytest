const mongoose = require("mongoose");

const loanAmountSchema = new mongoose.Schema({
    Address: String,
    Fname: String,
    Appartment: String,
    PostalCode: Number,
    Lname: String,
    City: String,
    Email: String,
    YearsAtAddress: Number,
    MonthsAtAddress: Number,
    CellPhone: Number,
    Alternate: Number,
    Sin: Number,
    title: String,
    month: String,
    day: Number,
    year: Number,
    martialStatus: String,
    Amount: Number,

}, { timestamps: true });

const loanAmount = mongoose.model("loanAmount", loanAmountSchema);

module.exports = loanAmount;