const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("transaction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        transactionCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
