const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("favourites", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  });
};