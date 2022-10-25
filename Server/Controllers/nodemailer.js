const nodemailer = require("nodemailer");

require("dotenv").config();

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "quickcarec422@gmail.com",
    pass: process.env.mdp,
  },
});
module.exports.sendConfirmationMail = (email, code) => {
//   console.log(email, code);
  return transport.sendMail({
    from: "QuickCareApp@gmail.com",
    to: email,
    subject: "Confirm your Account",
    html: `<h1> Confirmation of Account </h1>
    <h2> Welcome To Quick Care App </h2>
    <p>  Please use the Code BElow to activate your account: </p>
    <a> Your activation Code is : ${code} </a>`,
  });
};
