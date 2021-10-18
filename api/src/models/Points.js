const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('points', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    stock: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1000000
    },
    img:{
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 0
    }
  });
};