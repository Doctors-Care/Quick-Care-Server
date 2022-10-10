const bcrypt = require("bcrypt")

//Controller related to users ressource for login And signUp.
const db = require("../Database/index");
//adding client 
module.exports = {
  addPatient: async (req, res) => {
    try {
    let newPatient = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password,10),
      phoneNumber: req.body.phoneNumber,
      adress: req.body.adress
    }
      const patient = await db.Patients.create(newPatient);
      await patient.save();
      res.status(203).send(patient);
    } catch (error) { res.status(400).send('you have error') }
  },

  patientAuthentification: async (req, res) => {
try {
  let filter = {
    email: req.body.email
  }
  const Patient = await db.Patients.findOne({ where: filter })
  if (!Patient) {
    return res.status(401).send("user not found check your email")
  }
  const Valid = bcrypt.compareSync(req.body.password, Patient.password)
  if (!Valid) {
    return res.status(402).send("wrong password")
  }

  res.status(200).send("ok")

} catch (error) {
  console.log(error)
  res.status(400).send("Somthing went wrong")
}
  },
  getInformationsOfPatient: async (req, res) => {

    try { 
        const getPatientInfo = await db.requests.findOne({where:{id:req.params.patientId}})
        console.log(getPatientInfo)
        res.status(222).json(getPatientInfo);
    }
    catch (error) {  res.status(530).send(error)}
} 
};
