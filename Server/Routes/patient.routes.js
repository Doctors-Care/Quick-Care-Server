const express = require("express") ;
const router = express.Router() ;

const  { getInformationsOfPatient,updatePatient,addPatient , patientAuthentification }=require("../Controllers/Patient.controllers")
//post request to add a patient.
router.post("/signup",addPatient)
//post request to authenticate patient.
router.post("/signin",patientAuthentification)
// //UPDATE request to update.
// router.put('/update/:id',updatePatient) ; 
// // get request for fetching informations.
// router.get('/getOne/:id', getInformationsOfPatient );
module.exports = router;