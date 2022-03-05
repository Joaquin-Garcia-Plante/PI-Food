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

module.exports = router;
