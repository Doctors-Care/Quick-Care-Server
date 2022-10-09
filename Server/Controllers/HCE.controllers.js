//Controller related to Admin ressource.
const db = require("../Database/index");



module.exports = {
    addHce:async(req,res)=>{
        let newHce = {
           name: req.body.adminName,
           email: req.body.email,
           password: req.body.password,
           phoneNumber: req.body.phoneNumber,
           adress:req.body.adress,
           licenseNumber: req.body.license
        }
        console.log(newHce);
        try {
            const hce =await db.Hce.create(newHce);
            res.status(203).send(hce);
        }catch (error){res.status(555).send('you have error')}
    },
}