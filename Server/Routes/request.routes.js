const express = require("express") ;
const router = express.Router() ;
const requireAuhDoc = require('../Controllers/middleware');
const requireAuthPat = require("../Controllers/middleware")

const  { findHceReq,getAllRequests,findAllDoctorRequestsOfOneUser,findAllHCERequestsOfOneUser, addRequest,actifRequest,takeInCharge,getAllOKRequests,markAsDone,getAllOKDoneRequests }=require("../Controllers/RequestControllers")
router.get('/getAll', findHceReq );
router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
router.post("/getAllDocOfOnePatient",findAllDoctorRequestsOfOneUser)
router.post("/getAllHceOfOnePatient",findAllHCERequestsOfOneUser)
router.get("/getAllRequests",requireAuhDoc,getAllRequests)
router.put("/putDoctorId",requireAuhDoc,takeInCharge)
router.get("/getAllOKRequests",requireAuhDoc,getAllOKRequests)
router.put("/markasdone",requireAuhDoc,markAsDone)
router.get("/getAllOKDoneRequests",requireAuhDoc,getAllOKDoneRequests)








module.exports = router;
