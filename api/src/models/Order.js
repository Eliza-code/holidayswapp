const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM({
        values: ["Pending", "Accepted", "Cancelled", "Completed"],
      }),
      allowNull: false,
    },
    pointsOrder: {
      type: DataTypes.BIGINT,
    },
    arrivealDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    departureDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM({
        values: ["Reciprocal", "Pay with points"],
      }),
      allowNull: false,
    },
  });
};
