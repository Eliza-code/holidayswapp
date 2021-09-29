const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("announcement", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
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
    },
    sleeps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    surfaceM2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    smokersWelcome: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    petsWelcome: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    childremWelcome: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    wifi: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    tv: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    washing_machine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    fridge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    a_c: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    private_parking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
