const { Router } = require("express");
const router = Router();
const { types } = require("../controllers/diets");
router.get("/", types);
module.exports = router;
