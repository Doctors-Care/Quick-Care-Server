//Controller related to users ressource for login And signUp.
const  db  = require("../Database/index");
//adding client 
module.exports = {
  addPatient:async(req,res)=>{
    let newPatient = {
       firstName: req.body.adminName,
       lastName: req.body.adminName,
       email: req.body.email,
       password: req.body.password,
       phoneNumber: req.body.phoneNumber,
       adress:req.body.adress
    }
    console.log(newPatient);
    try {
        const patient =await db.Patients.create(newPatient);
        res.status(203).send(patient);
    }catch (error){res.status(555).send('you have error')}
},

  
};
