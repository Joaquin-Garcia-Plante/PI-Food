const { Router } = require("express");
const router = Router();
const { types } = require("../controllers/types");
router.get("/", types);
module.exports = router;
