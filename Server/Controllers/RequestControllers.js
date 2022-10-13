const { request } = require("express");
const db = require("../Database/index");

module.exports = {
    addRequest: async (req, res) => {
        try {
            const filter = {
                email: req.body.email
            }
            
            const requestidentif = await db.Patients.findOne({ where: filter })
            
            const requestForm = {
                description: req.body.description,
                status: req.body.status,
                patientId : requestidentif.id
            }
            const request = await db.requests.create(requestForm)
            res.status(201).json(request)
        } catch (error) {
            
            console.log(error)
            res.status(400).json("error")
        }
    },
    actifRequest:async (req,res)=>{
        try {
            const requestId={
                id :req.body.id,
            }
            const accepted = await db.requests.findOne({where:requestId})
            
            if(accepted.hceId==!null){
                const HceAccept = await db.Hce.findOne({where:{id:accepted.hceId}})
                res.status(201).json(HceAccept)
            }
            else {
                res.status(202).json("waiting")
            }
        } catch (error) {
            console.log(error)
        }
    },
    findHceReq: async (req, res) => {
        try { 
            const requestHCE = await db.requests.findAll({where:{status:"HCE"}})
            console.log(requestHCE)
            res.status(222).json(requestHCE);
        }
        catch (error) {  res.status(530).send('you have error')}
    },
//     validationHce: async(req, res)=>{
// try{
// let validation =  
// }
//     }
    }
