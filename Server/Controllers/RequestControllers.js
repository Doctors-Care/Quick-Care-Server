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
            res.status(201).json("Emergency !!")
        } catch (error) {
            console.log(error)
        }
    }
}