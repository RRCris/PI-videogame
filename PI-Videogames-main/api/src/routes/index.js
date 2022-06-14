const { Router } = require("express");
const { getGenres, qualify } = require("../handleDB");
const routerUser = require("./user");
// Importar todos los routers;
const routerVideogames = require("./videogames");

const router = Router();

// Configurar los routers
router.use("/videogames", routerVideogames);
router.use("/user", routerUser);

//single routes
router.get("/genres", (req, res) => {
  getGenres()
    .then((x) => res.status(200).send(x))
    .catch((e) => res.status(500).send(e));
});

router.get("/score", (req, res) => {
  if (!req.query.videogame || !req.query.user || !req.query.score) {
    res.status(500).send({ msg: "don´t exists the all parameters " });
  } else {
    qualify(req.query.user, req.query.videogame, req.query.score)
      .then((x) => res.status(200).send(x))
      .catch((e) => res.status(500).send(e));
  }
});
module.exports = router;
