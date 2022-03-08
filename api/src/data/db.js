const { Recipe, Diet } = require("../db");
const { detailRouteDb, mainRouteDb } = require("../providers/db");
let diets = [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto-vegetarian",
  "ovo-vegetarian",
  "vegan",
  "pescetarian",
  "paleo",
  "primal",
  "low-FODMAP",
  "whole30",
];
const getDbRecipes = async () => {
  let allDbRecipes = await Recipe.findAll({
    include: [
      {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  allDbRecipes = mainRouteDb(allDbRecipes);
  return allDbRecipes;
};
const getDbRecipeDetail = async (id) => {
  var recipe = await Recipe.findByPk(id, {
    include: {
      model: Diet,
      through: { attributes: [] },
      attributes: ["name"],
    },
  });
  if (recipe) {
    recipe = recipe.get({ plain: true });
    recipe.diets = recipe.diets.map((diet) => diet.name);
  }
  recipe = detailRouteDb(recipe);
  return recipe;
};
const setDbDiets = async () => {
  diets.forEach((d) => {
    Diet.findOrCreate({ where: { name: d } });
  });
};

const getDbDiets = async () => {
  await setDbDiets();
  let diets = null;
  let resp = await Diet.findAll({
    attributes: { exclude: ["id", "createdAt", "updatedAt"] },
  });
  diets = resp.map((d) => d.name);
  return diets;
};

module.exports = {
  getDbDiets,
  getDbRecipes,
  getDbRecipeDetail,
};
