const bcrypt = require("bcrypt");
const { sendConfirmationMail } = require("./nodemailer");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { sendNotification } = require("./Notification");

//Controller related to users ressource for login And signUp.
const db = require("../Database/index");
//adding client
module.exports = {
  //adding patient to the database

  addPatient: async (req, res) => {
    try {
      //generating the activation code
      const characters =
        "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let activationCode = "";
      for (let i = 0; i <= 6; i++) {
        activationCode +=
          characters[Math.floor(Math.random() * characters.length)];
      }
      // creating the Patient model
      let newPatient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phoneNumber: req.body.phoneNumber,
        adress: req.body.adress,
        activationCode: activationCode,
      };
      // sending validation code via node mailer
      const nodemailer = await sendConfirmationMail(
        newPatient.email,
        activationCode
      );
      console.log("nodemailer", nodemailer);
      //creating the profile for patient
      const patient = await db.Patients.create(newPatient);
      res.status(203).send(patient);
    } catch (error) {
      console.log(error);
      res.status(400).send("you have error");
    }
  },

  //validation code verification

  verifyCode: async (req, res) => {
    try {
      //find one Patient with his id as a filter
      let filter = { id: req.body.id };
      const Patient = await db.Patients.findOne({ where: filter });

      if (Patient.activationCode === req.body.activationCode) {
        return res.status(200).send("thank you for joining your app");
      }
      res.status(402).send("incorrect Code");
    } catch (error) {
      res.status(400).send(error);
    }
  },

  patientAuthentification: async (req, res) => {
    try {
      let filter = {
        email: req.body.email,
      };
      const Patient = await db.Patients.findOne({ where: filter });
      if (!Patient) {
        return res.status(401).send("user not found check your email");
      }
      const Valid = bcrypt.compareSync(req.body.password, Patient.password);
      if (!Valid) {
        return res.status(402).send("wrong password");
      } else {
        const exp = Date.now() + 1000 * 60 * 60;
        const token = jwt.sign(
          { sub: Patient.id, exp },
          process.env.SECRET_KEY
        );
        res.cookie("Authorization", token, {
          expires: new Date(exp),
          httpOnly: true,
          sameSite: "lax",
        });
        sendNotification(Patient.NotifToken);
        return res
          .status(200)
          .send({ message: "welcome back", Patient, token });
      }
      // res.status(200).send(Patient);
    } catch (error) {
      console.log(error);
      return res.status(400).json("Somthing went wrong");
    }
  },
  getInformationsOfPatient: async (req, res) => {
    console.log(req.params.id);
    try {
      const getPatientInfo = await db.Patients.findOne({
        where: { id: req.params.id },
      });
      console.log(getPatientInfo);
      res.status(222).json(getPatientInfo);
    } catch (error) {
      res.status(530).send(error);
    }
  },
  gettingPatient: async (req, res) => {
    try {
      let filter = {
        id: req.body.id,
      };
      const Patient = await db.Patients.findOne({ where: filter });
      res.status(200).json(Patient);
    } catch (error) {
      console.log(error);
      res.status(400).send("error");
    }
  },

  //update First name
  UpdatePatient: async (req, res) => {
    try {
      let filter = {
        id: req.body.id,
      };

      const Patient = await db.Patients.findOne({ where: filter });
      const change = await Patient.update(req.body);
      res.status(201).json(change);
    } catch (error) {
      console.log(error);
      res.status(401).json("failed");
    }
  },

  expoNotification: async (req, res) => {
    try {
      let filter = {
        email: req.body.email,
      };

      const Patient = await db.Patients.findOne({ where: filter });
      const change = await Patient.update(req.body);
      res.status(201).json(change);
    } catch (error) {
      console.log(error);
      res.status(401).json("failed");
    }
  },

  //update last name
  // UpdateLastName:async(req,res)=>{
  //   try {
  //     let filter ={
  //       id :req.body.id
  //     }
  //     let data ={
  //       lastName:req.body.lastName
  //     }

  //     const Patient = await db.Patients.findOne({where :filter})
  //     const change = await Patient.update(data)
  //     res.status(201).json(data.lastName)
  //   } catch (error) {
  //     console.log(error)
  //     res.status(401).json("failed")
  //   }
  // },

  // //update email
  // UpdateLastName:async(req,res)=>{
  //   try {
  //     let filter ={
  //       id :req.body.id
  //     }

  //     const Patient = await db.Patients.findOne({where :filter})
  //     const change = await Patient.update(req.body)
  //     res.status(201).json(data.lastName)
  //   } catch (error) {
  //     console.log(error)
  //     res.status(401).json("failed")
  //   }
  // },
};
