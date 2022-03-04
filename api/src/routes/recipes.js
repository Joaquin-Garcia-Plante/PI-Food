const { Router } = require("express");
const { recipes, recipesID } = require("../controllers/recipes");
const router = Router();

router.get("/", recipes);
router.get("/:id", recipesID);
// router.get("/", async (req, res) => {
//   const apiInfo = await getApiInfo();
//   console.log(apiInfo.results);
//   res.status(200).send(apiInfo);
// });
module.exports = router;
