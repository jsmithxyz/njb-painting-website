const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");
const creds = require("./config/config");
require("dotenv").config();

const auth = {
  auth: {
    api_key: creds.EMAILAPIKEY,
    domain: creds.EMAILDOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (name, email, message, cb) => {
  const mailOptions = {
    from: email,
    to: "njbpainting@comcast.net",
    subject: name + "-- Contact Form Request from Website",
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
