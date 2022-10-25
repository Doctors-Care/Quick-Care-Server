const express = require("express") ;
const router = express.Router() ;
const requireAuhDoc = require('../Controllers/middleware');
const requireAuthPat = require("../Controllers/middleware")

const  { findHceReq,getAllRequests,findAllRequestsOfOneUser, addRequest,actifRequest,takeInCharge,getAllOKRequests,getAllOKDoneRequests }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",requireAuthPat,addRequest)
router.post("/checkRequest",actifRequest)
router.post("/getAllofOnePatient",findAllRequestsOfOneUser)
router.get("/getAllRequests",getAllRequests)
router.put("/putDoctorId",requireAuhDoc,takeInCharge)
router.get("/getAllOKRequests",getAllOKRequests)
router.get("/getAllOKDoneRequests",getAllOKDoneRequests)


module.exports = router;
