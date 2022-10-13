//Controller related to HCE ressource.
const db = require("../Database/index");
const bcrypt = require("bcrypt")


module.exports = {
    addHce:async(req,res)=>{
        let newHce = {
           name: req.body.name,
           email: req.body.email,
           password: bcrypt.hashSync(req.body.password,10),
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
          console.log(req.body);
          const Hce = await db.Hce.findOne({ where: filter })
          console.log(Hce);
          if (!Hce) {
            return res.status(401).send("check you email address")
          }
          const Valid = bcrypt.compareSync(req.body.password, Hce.password)
          if (!Valid) {
            return res.status(402).send("wrong password")
          }
        
          res.status(200).send("allowed")
        
        } catch (error) {
          res.status(400).send(error)
        }
          },
          gettingOneHce: async (req, res) => {
            try {
              let filter = {
                email: req.body.email
              }
              const Hce = await db.Hce.findOne({ where: filter })
              res.status(200).json(Hce)
            } catch (error) {
              console.log(error)
              res.status(400).send("error")
            }
              }
        
}