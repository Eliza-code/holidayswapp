const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("favourite", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // },
    // announcementId: {
    //   type: DataTypes.INTEGER,

    // },
    // userId: {
    //   type: DataTypes.INTEGER,

    // },
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // country: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // city: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // points: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 100,
    // },
    // image: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    // },
    // rating: {
    //   type: DataTypes.INTEGER,
    //   defaultValue: 0,
    // },
  });
};
