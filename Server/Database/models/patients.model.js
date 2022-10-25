// Define and export the sequelize model that represents the table Patients.

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define("patients", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
    },
    chronicDiseases: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    activationCode: {
      type: DataTypes.STRING,
    },
    NotifToken: {
      type: DataTypes.STRING,
    },
  });

  return Patient;
};
