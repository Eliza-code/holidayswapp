const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    googleId: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    nacionality: {
      type: DataTypes.STRING,
    },
    languagesSpoken: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    description: {
      type: DataTypes.STRING,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 1000,
    },
  });
};
