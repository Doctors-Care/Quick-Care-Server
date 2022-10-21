
const express = require("express") ;
const router = express.Router() ;



// // Require controller modules.
 const{gettingOneHce,hceAuthentification,addHce,updateReq,verifyCode}=require ('../Controllers/HCE.controllers')


// /// comment routes /////////////////////////////////////


// /// POSTS ROUTES /// 
// // post request to authenticate HCE
router.post("/signin",hceAuthentification)
router.post("/add",addHce)
// //UPDATE request to update  
// router.put('/update/:id',updateHce) ; 
router.post("/getOne",gettingOneHce)
router.post("/accountconfirmation",verifyCode)










module.exports = router;