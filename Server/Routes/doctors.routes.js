// / admin routes////////////////////////////////////////////////////////////////
const express = require("express") ;
const router = express.Router() ;



// // Require controller modules.
const { getInformationsOfDoctor,addDoctor, loginDoc,updateDoctor} = require('../Controllers/Doctors.controllers')


// /// POSTS ROUTES ///

// // POST request for creating a new post.
router.post('/addDoctor',addDoctor) ;
// // post request for authentication.
router.post("/login",loginDoc)
// // put request for updating informations.
// router.put('/update/:id',updateDoctor) ; 
// // get request for fetching informations.
// router.get('/getOne/:id', getInformationsOfDoctor );









module.exports = router;