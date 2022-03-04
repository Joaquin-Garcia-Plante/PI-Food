const { Router } = require("express");
const { recipe } = require("../controllers/recipe");
const router = Router();

router.post("/", recipe);

module.exports = router;
