const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("points", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    stock: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1000000,
    },
  });
};
