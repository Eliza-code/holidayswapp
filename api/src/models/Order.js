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
        values: ["pending", "cancelled", "completed"],
      }),
      allowNull: false
    },
    arrivealDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departureDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type:DataTypes.ENUM({
        values: ["Reciprocal" ,"Pay with points"],        
      }),
      allowNull: false
    }   
  });
};