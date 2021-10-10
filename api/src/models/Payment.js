const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("payment", {
    transactionType: {
      type: DataTypes.STRING,
      defaultValue: "MercadoPago"
    },
    status: {
        type: DataTypes.ENUM({
          values: ["pending", "cancelled", "completed"],
        }),
        allowNull: false,
        defaultValue: "pending"
      },
    payment_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  })
};