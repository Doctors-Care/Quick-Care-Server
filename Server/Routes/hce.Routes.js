
const express = require("express") ;
const router = express.Router() ;



// // Require controller modules.
 const{findHceReq,hceAuthentification,addHce,updateReq}=require ('../Controllers/HCE.controllers')


// /// comment routes /////////////////////////////////////


// /// POSTS ROUTES /// 
// // post request to authenticate HCE
router.post("/signin",hceAuthentification)
router.post("/add",addHce)
// //UPDATE request to update  
// router.put('/update/:id',updateHce) ; 
// // get request for fetching informations.











module.exports = router;