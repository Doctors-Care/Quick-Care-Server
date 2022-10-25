const express = require("express") ;
const router = express.Router() ;
const requireAuhDoc = require('../Controllers/middleware');
const requireAuthPat = require("../Controllers/middleware")

const  { findHceReq,getAllRequests,findAllRequestsOfOneUser, addRequest,actifRequest,takeInCharge,getAllOKRequests,markAsDone,getAllOKDoneRequests }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
router.post("/getAllofOnePatient",findAllRequestsOfOneUser)
router.get("/getAllRequests",requireAuhDoc,getAllRequests)
router.put("/putDoctorId",requireAuhDoc,takeInCharge)
router.get("/getAllOKRequests",requireAuhDoc,getAllOKRequests)
router.get("/getAllOKDoneRequests",requireAuhDoc,getAllOKDoneRequests)
router.put("/markasdone",requireAuhDoc,markAsDone)


module.exports = router;
