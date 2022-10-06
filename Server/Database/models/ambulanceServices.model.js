// Define and export the sequelize model that represents the table Ambulance services.

module.exports = (sequelize, DataTypes) => {
    const Ambulance = sequelize.define("ambulance", {
      name: {
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
        allowNull: false,      },
      licenseNumber: {
        type: DataTypes.STRING,
        allowNull: false,      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,      },
    });
  
    return Ambulance;
  };
  