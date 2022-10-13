const express = require("express") ;
const router = express.Router() ;

const  { findHceReq,findAllRequestsOfOneUser, addRequest,actifRequest }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
router.post("/getAllofOnePatient",findAllRequestsOfOneUser)
module.exports = router;
