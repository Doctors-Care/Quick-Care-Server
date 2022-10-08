// //Controller related to Admin ressource.
const db = require("../Database/index");
const bcrypt = require("bcrypt");
// // getInformationsOfDoctor,updateDoctor

module.exports = {
  //   //verifying doctor's identity
  //   doctorAuthentification: async (req, res) => {
  //     try {
  //       const doctor = {
  //         email: req.body.email,
  //         password: req.body.password
  //       }
  //       const doctorAuth = await db.Doctors.findOne({
  //         where:
  //         {
  //           email: req.body.email
  //         }
  //       }
  //       );
  //       const Match = bcrypt.compareSync(doctor.password, doctorAuth.dataValues.password);
  //       if (Match) {
  //         const token = jwt.sign( doctorAuth.dataValues, 'secret');
  //         res.cookie("auth", token);
  //         res.send({ message: 'welcome Back'})
  //       } else {
  //         res.send({ message: 'check the entries' });
  //       }
  //     }
  //     catch (err) {
  //         console.log(err)
  //       res.status(401).send(err)
  //     }
  //   },
  //    //method to add a post to the database via the respective model function.
  addDoctor: async (req, res) => {
    try {
      const newDoctor = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        phoneNumber: req.body.phoneNumber,
        licenseNumber: req.body.licenseNumber,
        adress: req.body.adress,
        disponibility: req.body.disponibility,
        image: req.body.image,
      };
      console.log(db.Doctors);
      
      const Doctors = await db.Doctors.build(newDoctor);
      await Doctors.save();
      res.status(203).json({ Doctors });
    } catch (error) {
      console.log(error), res.status(555).send("you have error");
    }
  },
  loginDoc : async (req,res) => {
    try {
      const doctor = {
        email: req.body.email,
        password: req.body.password
      }
      console.log(req.body.email);
      const doctorAuth = await db.Doctors.findOne({
        where:
        {
          email: req.body.email
        }
      }
      );
      console.log(doctorAuth);
      const Match =   bcrypt.compareSync(doctor.password, doctorAuth.dataValues.password);
      if (Match) {
        res.send({ message: 'welcome Back'})
      } else {
        res.send({ message: 'verify your credentials' });
      }
    }
    catch (err) {
        console.log(err)
      res.status(401).send(err)
    }
  }
};
