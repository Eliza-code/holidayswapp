const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("announcement", {
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("House", "Apartment"),
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    sleeps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    surfaceM2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50
    },
    smokersWelcome: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    petsWelcome: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    childremWelcome: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    wifi: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tv: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    washing_machine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    fridge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    a_c: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    private_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    image:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    rating:{
      type: DataTypes.BOOLEAN,
            defaultValue: false,
    }
  });
};
