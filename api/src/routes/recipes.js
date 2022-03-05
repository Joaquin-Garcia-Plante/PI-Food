const { Router } = require("express");
const { recipes, recipesID } = require("../controllers/recipes");
const router = Router();

router.get("/", recipes);
router.get("/:id", recipesID);

module.exports = router;
