const express = require("express") ;
const router = express.Router() ;

const  { getInformationsOfPatient,addPatient , patientAuthentification,gettingPatient,UpdatePatient }=require("../Controllers/Patient.controllers")
//authentification routes

//post request to add a patient.
router.post("/signup",addPatient)
//post request to authenticate patient.
router.post("/signin",patientAuthentification)
//post request to get user info
router.post("/One",gettingPatient)



//UPDATE request to updateProfoile.

//UPDAT first name 
router.put("/updateAll",UpdatePatient)

//Update last name


// router.put('/update/:id',updatePatient) ; 
// // get request for fetching informations.
router.get('/getOne/:id', getInformationsOfPatient );
module.exports = router;