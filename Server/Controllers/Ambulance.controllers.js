//Controller related to posts ressource.
const  db  = require("../Database/index");

module.exports = {
  addAS:async(req,res)=>{
    let newAS = {
       name: req.body.adminName,
       email: req.body.email,
       password: req.body.password,
       phoneNumber: req.body.phoneNumber,
       adress:req.body.adress,
       license: req.body.license
    }
    console.log(newAS);
    try {
        const AS =await db.Hce.create(newAS);
        res.status(203).send(AS);
    }catch (error){res.status(555).send('you have error')}
},
};
  

