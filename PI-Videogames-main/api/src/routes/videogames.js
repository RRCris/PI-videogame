const { Router } = require("express");
const { Videogame } = require("../db");
const fetch = require("node-fetch");
const routerVideogames = Router();
const { API_KEY } = process.env;

routerVideogames.get("/", (req, res) => {
  //   fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
  //     .then((r) => r.json())
  //     .then((r) => res.send(r));
  res.send("porcesando...");
  Videogame.findAll().then((r) =>
    console.log(r[0].getPlataforms().then((r) => console.log(r)))
  );
});

module.exports = routerVideogames;
