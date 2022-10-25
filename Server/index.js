const doctorRoutes = require ('./Routes/doctors.routes') ;
const patientRoutes = require ('./Routes/patient.routes') ;
const hceRoutes = require ('./Routes/hce.Routes') ;
const ambulanceRoute = require('./Routes/ambulance.routes');
const requestRoute = require('./Routes/request.routes');
const cookieParser = require('cookie-parser');
const express = require("express");
const db = require("./Database")
const cors = require ('cors')
const app = express();
const http = require ("http")
const {Server} = require ("socket.io");

app.use(cookieParser());


var PORT = process.env.PORT || 3001

const server = http.createServer(app);

const io = new Server (server,{cors:{origin:"http://192.168.11.85:19000/Chat"}})
// const ioDoc = new Server (server,{cors:{origin:"http://192.168.11.223:19000/doctorChat"}})

io.on("connection", (socket)=>{
  // const sockets = await io.fetchSockets();
  // for (const socket of sockets) {
  //   console.log(socket.data);
  // }
  console.log(`User Connected:${socket.id}`);
  socket.on('disconnect', () => {
    socket.disconnect()
    console.log('user disconnected'); })
  socket.on("patient_send_message", (data)=>{
// console.log(data);
    socket.emit("Patient_message", data)
    socket.broadcast.emit("Doctor_message", data)
    // socket.to(socket.id).emit( data)
  })
  socket.on("doctor_send_message", (data)=>{
// console.log(data);
socket.emit("Doctor_message", data)
socket.broadcast.emit("Patient_message", data)
// socket.broadcast.to(socket.id).emit( data)
  })
})
app.use(
  cors({
    origin:true,
    credentials: true,
  })
  );

db.sequelize.sync().then(()=>console.log("t3adet")).catch((err)=>console.log(err))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/doctor",doctorRoutes) ;
app.use("/user",patientRoutes) ;
app.use("/hce",hceRoutes) ;
app.use("/ambulance",ambulanceRoute) ;
app.use("/request",requestRoute)

server.listen(PORT, function () {
    console.log(` listening on Port ${PORT} `);
  });





