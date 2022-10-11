const { Sequelize, DataTypes } = require("sequelize");
const config = require('../../config.json');


const sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://cmqgawgbklnnsd:c2291a77d529f95476a7bf3d9ac48453d1eb0a453b10b75177a2c97889ba65a3@ec2-54-75-184-144.eu-west-1.compute.amazonaws.com:5432/d114u8m9u02ru7",{ dialectOptions:{ssl: {
    rejectUnauthorized: false
  }}})

  const db = {};
  db.sequelize = sequelize;
  db.sequelize = sequelize;


  db.Ambulance = require("./models/ambulanceServices.model")(sequelize, DataTypes);
  db.Patients = require("./models/patients.model")(sequelize, DataTypes);
  db.Hce = require("./models/hce.model")(sequelize, DataTypes);
  db.Doctors = require("./models/doctors.model")(sequelize, DataTypes);
  db.requests = require("./models/request.model")(sequelize,DataTypes)
  
db.Doctors.hasMany(db.requests, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
  db.requests.belongsTo(db.Doctors, { 
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
db.Patients.hasMany(db.requests, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
  db.requests.belongsTo(db.Patients, { 
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
  db.Hce.hasMany(db.requests, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });
  db.requests.belongsTo(db.Hce, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  });


db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = db;