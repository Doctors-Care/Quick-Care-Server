const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://dnknoztmmekhbp:f6f05066854de06cefcdf473a221564e335fa87fe3c21248a3e4c742e2ecd25c@ec2-52-208-164-5.eu-west-1.compute.amazonaws.com:5432/ddvlmd6cv9tfa2",{ dialectOptions:{ssl: {
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