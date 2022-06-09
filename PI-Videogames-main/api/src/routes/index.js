const { Router } = require("express");
// Importar todos los routers;
const routerVideogames = require("./videogames");

const router = Router();
// Configurar los routers
router.use("/videogames", routerVideogames);

module.exports = router;
