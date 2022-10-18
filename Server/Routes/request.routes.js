const express = require("express") ;
const router = express.Router() ;

const  { findHceReq,getAllRequests,findAllRequestsOfOneUser, addRequest,actifRequest,takeInCharge,getAllOKRequests }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
router.post("/getAllofOnePatient",findAllRequestsOfOneUser)
router.get("/getAllRequests",getAllRequests)
router.put("/putDoctorId",takeInCharge)
router.get("/getAllOKRequests",getAllOKRequests)


router.post("/checkDocRequest",actifDocRequest)
module.exports = router;
