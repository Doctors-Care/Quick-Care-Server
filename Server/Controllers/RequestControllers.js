const { request } = require("express");
const db = require("../Database/index");
const { sendNotification } = require("./Notification");

module.exports = {
  addRequest: async (req, res) => {
    try {
      const filter = {
        email: req.body.email,
      };

      const requestidentif = await db.Patients.findOne({ where: filter });

      const requestForm = {
        description: req.body.description,
        status: req.body.status,
        patientId: requestidentif.id,
      };
      const request = await db.requests.create(requestForm);
      res.status(201).json(request);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  getAllRequests: async (req, res) => {
    try {
      const requests = await db.requests.findAll({
        where: { status: "Doctor", DoctorId: null },
      });
      res.status(200).json(requests);
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  },

  getAllOKRequests: async (req, res) => {
    try {
      const requests = await db.requests.findAll({
        where: { status: "Doctor", DoctorId: !null },
      });
      res.status(200).json(requests);
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  },

  actifRequest: async (req, res) => {
    try {
      const requestId = {
        id: req.body.id,
      };
      const accepted = await db.requests.findOne({ where: requestId });

      if (accepted.hceId == !null) {
        const HceAccept = await db.Hce.findOne({
          where: { id: accepted.hceId },
        });
        let patientid = {
          id: accepted.patientId,
        };
        const patient = await db.Patients.findOne({ where: patientid });
        sendNotification(patient.NotifToken);
        res.status(201).json(HceAccept);
      } else {
        res.status(202).json("waiting");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  findHceReq: async (req, res) => {
    try {
      const requestHCE = await db.requests.findAll({
        where: { status: "HCE" },
        include: [
          {
            model: db.Patients,
            attributes: ["firstName", "lastName", "adress"],
          },
        ],
      });
      console.log(requestHCE);
      res.status(222).json(requestHCE);
    } catch (error) {
      console.log(error);
      res.status(530).send("you have an error");
    }
  },
  //     validationHce: async(req, res)=>{
  // // try{
  // // let validation =  await debug.requests.fin
  // // }
  //     },
  findAllRequestsOfOneUser: async (req, res) => {
    try {
      const filter = {
        patientId: req.body.id,
      };

      const requestOfPatient = await db.requests.findAll({
        where: filter,
        include: [
          { model: db.Hce, attributes: ["name"] },
          { model: db.Doctors, attributes: ["firstName", "lastName"] },
        ],
      });

      res.status(222).json(requestOfPatient);
    } catch (error) {
      console.log(error);
      res.status(530).send("you have error");
    }
  },
  takeInCharge: async (req, res) => {
    try {
      const request = await db.requests.findOne({
        where: req.body.id,
      });
      request.DoctorId = req.body.doctorId;
      request.TreatedORNot = true;
      await request.save();
      const Patient = await db.Patients.findOne({
        where: { id: request.patientId },
      });
      //sending notification to the patient
      sendNotification(Patient.NotifToken);
      res.status(201).json(request);
    } catch (err) {
      console.log(err);
      res.status(501).json(err);
    }
  },

  // doctorCallHce : async (req,res)=>{
  //  try {
  //   cons
  //  } catch (error) {

  //  }

  // }
};
