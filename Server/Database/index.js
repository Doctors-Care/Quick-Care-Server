const { Sequelize, DataTypes } = require("sequelize");
const config = require("../../config.json");                                           

const sequelize = new Sequelize(config.database, config.user, config.password,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);

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