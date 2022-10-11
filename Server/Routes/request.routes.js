const express = require("express") ;
const router = express.Router() ;

const  { addRequest, actifRequest,getAllRequests }=require("../Controllers/RequestControllers")

router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
router.get("/getAllRequests",getAllRequests)
module.exports = router;
