// //Controller related to Admin ressource.
const  db  = require("../Database/index");
// // getInformationsOfDoctor,updateDoctor


module.exports={
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
   addDoctor:async(req,res)=>{
        let newDoctor = {
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           email: req.body.email,
           password: req.body.password,
           phoneNumber: req.body.phoneNumber,
           licenseNumber: req.body.licenseNumber,
           adress:req.body.adress,
           disponibility: req.body.disponibility,
           image: req.body.image,
        }
        console.log(db.Doctors);
        try {
            const Doctors =await db.Doctors.create(newDoctor);
            res.status(203).send(Doctors);
        }catch (error){console.log(error),res.status(555).send('you have error')}
    },
    
}