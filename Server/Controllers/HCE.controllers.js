//Controller related to Admin ressource.
const db = require("../Database/index");



module.exports = {
    addHce:async(req,res)=>{
        let newHce = {
           name: req.body.name,
           email: req.body.email,
           password: req.body.password,
           phoneNumber: req.body.phoneNumber,
           address:req.body.address,
           licenseNumber: req.body.licenseNumber
        }
        console.log(newHce);
        try {
            const hce =await db.Hce.create(newHce);
            res.status(203).send(hce);
        }catch (error){res.status(555).send(error)}
    },
    hceAuthentification: async (req, res) => {
        try {
          let filter = {
            email: req.body.email
          }
          const Hce = await db.Hce.findOne({ where: filter })
          if (!Hce) {
            return res.status(401).send("check you email address")
          }
          const Valid = bcrypt.compareSync(req.body.password, Hce.password)
          if (!Valid) {
            return res.status(402).send("wrong password")
          }
        
          res.status(200).send("allowed")
        
        } catch (error) {
          console.log(error)
          res.status(400).send("not allowed")
        }
          }
        
}