const express = require("express") ;
const router = express.Router() ;
const requireAuhDoc = require('../Controllers/middleware');
const requireAuthPat = require("../Controllers/middleware")

const  { validationHce,findHceReq,getAllRequests,findActiveHceReq,findAllDoctorRequestsOfOneUser,findAllHCERequestsOfOneUser, addRequest,actifRequest,takeInCharge,getAllOKRequests,markAsDone,getAllOKDoneRequests }=require("../Controllers/RequestControllers")
router.get('/getAll/:id', findHceReq );
router.get('/getAllActive', findActiveHceReq );
router.put('/acceptrequest/:id', validationHce );
router.post("/addingRequest",addRequest)
router.post("/checkRequest",actifRequest)
router.post("/getAllDocOfOnePatient",requireAuhDoc,findAllDoctorRequestsOfOneUser)
router.post("/getAllHceOfOnePatient",requireAuhDoc,findAllHCERequestsOfOneUser)
router.get("/getAllRequests",requireAuhDoc,getAllRequests)
router.put("/putDoctorId",requireAuhDoc,takeInCharge)
router.get("/getAllOKRequests",requireAuhDoc,getAllOKRequests)
router.get("/getAllOKDoneRequests",requireAuhDoc,getAllOKDoneRequests)
router.put("/markasdone",requireAuhDoc,markAsDone)


module.exports = router;
