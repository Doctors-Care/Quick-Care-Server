const express = require('express');
const router = express.Router() ;

// // Require controller modules.
const {ASAuthentification,addAS,getInformationsOfAmbulanceServices,updateinformations } = require('../Controllers/Ambulance.controllers');

// /// Ambulance services ROUTES ///
// //post request to add an AS.
router.post("/signup",addAS)
// //post request to AS.
// router.post("/signin",ASAuthentification)
// // UPDATE request for one post.
// router.put('/updateInformations/:id', updateinformations);
// // get request for fetching informations.
// router.get('/getOne/:id', getInformationsOfAmbulanceServices );











module.exports = router;