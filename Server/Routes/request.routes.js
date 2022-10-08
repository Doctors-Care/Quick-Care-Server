const express = require("express") ;
const router = express.Router() ;

const  { addRequest }=require("../Controllers/RequestControllers")

router.post("/addingRequest",addRequest)
module.exports = router;
