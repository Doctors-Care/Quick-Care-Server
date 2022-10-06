
const express = require("express") ;
const router = express.Router() ;



// // Require controller modules.
 const{getInformationsOfHce,hceAuthentification,addHce,updateHce}=require ('../Controllers/HCE.controllers')


// /// comment routes /////////////////////////////////////


// /// POSTS ROUTES /// 
// // post request to authenticate HCE
// router.post("/signin",hceAuthentification)
// // POST request for creating a new post.
router.post ('/add',addHce) ;
// //UPDATE request to update  
// router.put('/update/:id',updateHce) ; 
// // get request for fetching informations.
// router.get('/getOne/:id', getInformationsOfHce );










module.exports = router;