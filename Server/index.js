const doctorRoutes = require ('./Routes/doctors.routes') ;
const patientRoutes = require ('./Routes/patient.routes') ;
const hceRoutes = require ('./Routes/hce.Routes') ;
const ambulanceRoute = require('./Routes/ambulance.routes');
const requestRoute = require('./Routes/request.routes');
const express = require("express");
const db = require("./Database")
const cors = require ('cors')
const app = express();
const http = require ("http")
const {Server} = require ("socket.io");

var PORT = process.env.PORT || 3001


const server = http.createServer(app);

const io = new Server (server,{cors:{origin:"http://192.168.11.223:19000/Chat"}})

io.on("connection", (socket)=>{
  console.log(`User Connected:${socket.id}`);

  socket.on("send_message", (data)=>{
console.log(data);
    socket.broadcast.emit("receive_message", data)
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





// app.get('/db', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT * FROM test_table');
//     const results = { 'results': (result) ? result.rows : null};
//     res.send( results );
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })