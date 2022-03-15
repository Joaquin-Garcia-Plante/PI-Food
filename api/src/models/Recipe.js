const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        "https://icon-library.com/images/recipe-icon-png/recipe-icon-png-8.jpg",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.FLOAT,
    },
    healthScore: {
      type: DataTypes.FLOAT,
    },
    instructions: {
      type: DataTypes.TEXT,
    },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
