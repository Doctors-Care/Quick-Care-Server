// / admin routes////////////////////////////////////////////////////////////////
const express = require("express") ;
const router = express.Router() ;
const requireAuhDoc = require('../Controllers/middleware');



// // Require controller modules.
const {addDoctor, loginDoc, getOneDoc,updateDocProfile,logout,verifyCode } = require('../Controllers/Doctors.controllers')


// /// POSTS ROUTES ///

// // POST request for creating a new post.
router.post('/addDoctor',addDoctor) ;
// // post request for authentication.
router.post("/loginDoc",loginDoc)
// // put request for updating informations.
router.put('/update',requireAuhDoc,updateDocProfile) ; 
// // get request for fetching informations.
router.post('/getOne',getOneDoc);

router.post("/verify", verifyCode);

router.get  ('/logout',logout) ;









module.exports = router;