const express = require("express");
const router = express.Router();

const {
  getInformationsOfPatient,
  addPatient,
  patientAuthentification,
  gettingPatient,
  UpdatePatient,
  verifyCode,
  expoNotification,logout
} = require("../Controllers/Patient.controllers");
//authentification routes

//post request to add a patient.
router.post("/signup", addPatient);
//post request to authenticate patient.
router.post("/signin", patientAuthentification);
//check verification code
router.post("/verify", verifyCode);
//post request to get user info
router.post("/One", gettingPatient);

//adding pushNotification token
router.put("/addTokenNotif", expoNotification);


//UPDATE Patient
router.put("/updateAll", UpdatePatient);

//Update last name

// router.put('/update/:id',updatePatient) ;
// // get request for fetching informations.
router.get("/getOne/:id", getInformationsOfPatient);
router.get('/logout',logout )


module.exports = router;
