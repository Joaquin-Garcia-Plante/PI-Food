const { getApiRecipes } = require("./api");
const { getDbRecipes } = require("./db");

const getAllRecipes = async () => {
  let apiInfo = await getApiRecipes();
  let dbInfo = await getDbRecipes();
  let respuesta = apiInfo.concat(dbInfo);
  return respuesta;
};

module.exports = {
  getAllRecipes,
};
