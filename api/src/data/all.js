const { getAllApiRecipes } = require("./api");
const { getDbInfo } = require("./db");
const { mainRoute } = require("../providers/api");
const { mainRouteDb } = require("../providers/db");

const getAllRecipes = async () => {
  let apiInfo = await getAllApiRecipes();
  apiInfo = mainRoute(apiInfo);
  let dbInfo = await getDbInfo();
  dbInfo = mainRouteDb(dbInfo);
  let respuesta = apiInfo.concat(dbInfo);
  return respuesta;
};

module.exports = {
  getAllRecipes,
};
