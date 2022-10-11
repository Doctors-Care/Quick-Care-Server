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
        }
    },


    getAllRequests: async (req, res) => {
        try {
            
            const requests = await db.requests.findAll({ where: { status: "Doctor" } })
            res.status(200).json(requests)
        } catch (error) {
            console.log(error)
            res.status(501).json(error)
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
    }
}