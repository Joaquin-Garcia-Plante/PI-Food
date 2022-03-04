const isUUID = require("is-uuid");
const { getDbDetail } = require("../data/db");
const { getDetailRecipe } = require("../data/api");
const { getAllRecipes } = require("../data/all");

const recipes = async (req, res) => {
  let allRecipes = await getAllRecipes();
  res.status(200).send(allRecipes);
};
const recipesID = async (req, res) => {
  let { id } = req.params;
  var recipe = null;
  if (isUUID.anyNonNil(id)) {
    recipe = await getDbDetail(id);
  } else {
    recipe = await getDetailRecipe(id);
  }
  res.status(200).send(recipe);
};

module.exports = {
  recipes,
  recipesID,
};
