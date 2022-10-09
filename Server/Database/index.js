const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://qjwqawgrzeykbr:08328c1f33f551553717a146a1301391d8e703bb9999157e869ce1ca42c455ee@ec2-99-81-137-11.eu-west-1.compute.amazonaws.com:5432/dav98tes0eolbq",{ dialectOptions:{ssl: {
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