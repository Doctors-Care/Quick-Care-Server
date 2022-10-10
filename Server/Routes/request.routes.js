const express = require("express") ;
const router = express.Router() ;

const  { findHceReq, addRequest }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",addRequest)
module.exports = router;
