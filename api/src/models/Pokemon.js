const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4//genera un id al personaje nuevo
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.INTEGER,
    },
     attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
     
    },
    speed: {
      type: DataTypes.INTEGER,
      
    },
    height: {
      type: DataTypes.INTEGER
     
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    image:{
      type:DataTypes.TEXT
    },
    createdInDb:{
    type:DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue: true,
    }
  });
};
