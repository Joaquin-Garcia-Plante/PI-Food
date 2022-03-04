const axios = require("axios");
const { detailRoute } = require("../providers/api");
require("dotenv").config();
const { API_KEY } = process.env;

const getAllApiRecipes = async () => {
  const apiInfo = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const result = apiInfo.data.results;
  return result;
};
const getDetailRecipe = async (id) => {
  const apiInfo = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=1db02e94b5b54f3e8974e5c8e0e972f5`
  );
  let result = detailRoute(apiInfo.data);
  return result;
};

module.exports = { getAllApiRecipes, getDetailRecipe };
