const { Router } = require("express");
const recipes = require("./recipes");
const types = require("./types");
const recipe = require("./recipe");
// const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipes);
router.use("/types", types);
router.use("/recipe", recipe);

//! Recipes
// const getApiInfo = async () => {
//   const apiInfo = await axios.get(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=0daf0d0f166d4cf6a1e12874055b89d3&addRecipeInformation=true&number=100`
//   );
//   const result = apiInfo.data.results;
//   return result;
// };
// router.get("/recipes", async (req, res) => {
//   const apiInfo = await getApiInfo();
//   console.log(apiInfo);
//   res.send(apiInfo);
// });
module.exports = router;
