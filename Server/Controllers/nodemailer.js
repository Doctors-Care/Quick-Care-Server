const nodemailer = require ("nodemailer");


const transport = nodemailer.createTransport({
    // pool: true,
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
    auth:{
        user : "quickcarec422@gmail.com",
        pass:"zmmkqyslmsditobs"
    }
});
module.exports.sendConfirmationMail =(email, code)=>{
    console.log(email,code);
return transport
.sendMail({
    from:"quickcarec4@gmail.com",
    to: email,
    subject:"Confirm your Account",
    html: `<h1> Confirmation of your Registration </h1>
    <h2> Bonjour </h2>
    <p> To activate your Account please by typing the code below: </p>
    <a>${code}</a>`
})
}