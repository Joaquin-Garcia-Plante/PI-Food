const { Recipe, Diet } = require("../db");
const { detailRouteDb } = require("../providers/db");
let diets = [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto vegetarian",
  "ovo vegetarian",
  "vegan",
  "pescetarian",
  "paleo",
  "primal",
  "low FODMAP",
  "whole30",
];
const getDbInfo = async () => {
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
  return allDbRecipes;
};
const getDbDetail = async (id) => {
  var recipe = await Recipe.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: {
      model: Diet,
      as: "diets",
      through: { attributes: [] },
      attributes: ["name"],
      exclude: ["recipe_diet"],
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
  return await Diet.findAll();
};

module.exports = {
  getDbDiets,
  getDbInfo,
  getDbDetail,
};
