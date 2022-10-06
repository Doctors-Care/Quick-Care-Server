const doctorRoutes = require ('./Routes/doctors.routes') ;
const patientRoutes = require ('./Routes/patient.routes') ;
const hceRoutes = require ('./Routes/hce.Routes') ;
const ambulanceRoute = require('./Routes/ambulance.routes'); 
const db = require("./Database/index");
const express = require("express");
const cors = require ('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
db.sequelize.sync({force:true}).then(()=>console.log("t3adet")).catch((err)=>console.log(err))
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/doctor",doctorRoutes) ;
app.use("/user",patientRoutes) ;
app.use("/hce",hceRoutes) ;
app.use("/ambulance",ambulanceRoute) ;



const PORT =  3000 ;





app.listen(PORT, function () {
    console.log("Port 3000 is working");
  });