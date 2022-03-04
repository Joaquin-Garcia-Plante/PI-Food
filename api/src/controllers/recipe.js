const { Recipe, Diet } = require("../db");

const recipe = async (req, res) => {
  let { title, summary, spoonacularScore, healthScore, instructions, diet } =
    req.body;
  try {
    let recipeCreated = await Recipe.create({
      title,
      summary,
      spoonacularScore,
      healthScore,
      instructions,
    });
    let dietDb = await Diet.findAll({
      where: { name: diet },
    });
    await recipeCreated.addDiet(dietDb);
    res.send("Recipe Created");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

module.exports = {
  recipe,
};
