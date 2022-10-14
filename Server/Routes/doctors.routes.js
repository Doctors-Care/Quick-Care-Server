// / admin routes////////////////////////////////////////////////////////////////
const express = require("express") ;
const router = express.Router() ;



// // Require controller modules.
const { getInformationsOfDoctor,addDoctor, loginDoc,updateDoctor , getOneDoc,updateDocProfile} = require('../Controllers/Doctors.controllers')


// /// POSTS ROUTES ///

// // POST request for creating a new post.
router.post('/addDoctor',addDoctor) ;
// // post request for authentication.
router.post("/loginDoc",loginDoc)
// // put request for updating informations.
router.put('/update',updateDocProfile) ; 
// // get request for fetching informations.
router.post('/getOne',getOneDoc);









module.exports = router;