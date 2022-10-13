const express = require("express") ;
const router = express.Router() ;


const  { findHceReq, addRequest,actifRequest, getAllRequests }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
router.get("/getAllRequests",getAllRequests)
module.exports = router;
