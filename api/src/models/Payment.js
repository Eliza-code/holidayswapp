const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("payment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
        type: DataTypes.ENUM({
          values: ["pending", "cancelled", "completed"],
        }),
        allowNull: false
      },
    payment_id: {
      type: DataTypes.BIGINT,
      defaultValue: 0
    }
  })
};