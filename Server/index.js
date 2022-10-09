// const doctorRoutes = require ('./Routes/doctors.routes') ;
// const patientRoutes = require ('./Routes/patient.routes') ;
// const hceRoutes = require ('./Routes/hce.Routes') ;
// const ambulanceRoute = require('./Routes/ambulance.routes');
// const requestRoute = require('./Routes/request.routes');
const express = require("express");
const cors = require ('cors')
const app = express();
const { Pool } = require('pg');

var PORT = process.env.PORT || 3000

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://qjwqawgrzeykbr:08328c1f33f551553717a146a1301391d8e703bb9999157e869ce1ca42c455ee@ec2-99-81-137-11.eu-west-1.compute.amazonaws.com:5432/dav98tes0eolbq",
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('*', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// db.sequelize.sync().then(()=>console.log("t3adet")).catch((err)=>console.log(err))
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use("/doctor",doctorRoutes) ;
// app.use("/user",patientRoutes) ;
// app.use("/hce",hceRoutes) ;
// app.use("/ambulance",ambulanceRoute) ;
// app.use("/request",requestRoute)









app.listen(PORT, function () {
    console.log(` listening on Port ${PORT} `);
  });