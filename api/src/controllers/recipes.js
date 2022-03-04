const isUUID = require("is-uuid");
const { getDbRecipeDetail } = require("../data/db");
const { getApiRecipeDetail } = require("../data/api");
const { getAllRecipes } = require("../data/all");

const recipes = async (req, res) => {
  let allRecipes = await getAllRecipes();
  res.status(200).send(allRecipes);
};
const recipesID = async (req, res) => {
  let { id } = req.params;
  var recipe = null;
  if (isUUID.anyNonNil(id)) {
    recipe = await getDbRecipeDetail(id);
  } else {
    recipe = await getApiRecipeDetail(id);
  }
  res.status(200).send(recipe);
};

module.exports = {
  recipes,
  recipesID,
};
