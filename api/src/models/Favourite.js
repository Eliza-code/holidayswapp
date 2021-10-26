const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("favourite", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};
