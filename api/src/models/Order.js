const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Payment method cannot be empty",
        },
      },
    },
    points: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM({
        values: ["pending", "cancelled", "completed"],
      }),
      allowNull: false,
      defaultValue: "pending"
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profilePicture: {
      type: DataTypes.STRING,
    },
  });
};