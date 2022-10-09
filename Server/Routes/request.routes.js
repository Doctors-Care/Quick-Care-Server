const express = require("express") ;
const router = express.Router() ;

const  { addRequest, actifRequest }=require("../Controllers/RequestControllers")

router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
module.exports = router;
