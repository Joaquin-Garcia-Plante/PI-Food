const { getApiRecipes } = require("./api");
const { getDbRecipes } = require("./db");
const { filterByName } = require("../providers");
const getAllRecipes = async () => {
  let apiInfo = await getApiRecipes();
  let dbInfo = await getDbRecipes();
  let respuesta = apiInfo.concat(dbInfo);
  return respuesta;
};

const getRecipesFilteredByName = async (name) => {
  let apiInfo = await getApiRecipes();
  let dbInfo = await getDbRecipes();
  apiInfo = filterByName(apiInfo, name);
  dbInfo = filterByName(dbInfo, name);
  let respuesta = apiInfo.concat(dbInfo);
  return respuesta;
};

module.exports = {
  getAllRecipes,
  getRecipesFilteredByName,
};
