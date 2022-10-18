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
    html: `<h1> Confirmation of your Registration </h1>
    <h2> Welcome To Quick Care App </h2>
    <p>  Please enter the code below to activate your account: </p>
    <a>Your Secret code is: "${code}"</a>`,
  });
};
