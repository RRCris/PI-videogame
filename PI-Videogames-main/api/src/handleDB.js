const { Videogame, Plataform, Genre } = require("./db");
const { Op } = require("sequelize");
const fetch = require("node-fetch");

//por si no funciona otra vez
let { API_KEY } = process.env;
if (!API_KEY) API_KEY = "fd9e97581013433790aac899770e6d05";

function searchDB(name) {
  //envolvemos todo en una promesa
  let p = new Promise((resolve, reject) => {
    //hacemos la busqueda
    Videogame.findAll({
      attributes: ["name", "image", "rating"],
      where: {
        name: {
          [Op.like]: name.toLowerCase() + "%",
        },
      },
      include: [Plataform, Genre],
    })
      .then((r) => {
        //formateamos el resultado para que no hallan errores
        let formating = r.map((x) => {
          let properties = x.dataValues;
          properties.image = [properties.image];
          return properties;
        });
        resolve(formating);
      })
      .catch((e) => reject({ err: e }));
  });

  return p;
}

function detailsDB(id) {
  let p = new Promise((resolve, reject) => {
    Videogame.findAll({
      where: {
        id,
      },
      include: [Plataform, Genre],
    })
      .then((r) => {
        if (r.length > 0) {
          r[0].dataValues.image = [r[0].dataValues.image];
          resolve(r[0].dataValues);
        } else resolve(r);
      })
      .catch((e) => reject(e));
  });
  return p;
}

function createVideogame(
  name,
  image,
  launch,
  description,
  plataformsID,
  genresID
) {
  let p = new Promise(async (resolve, reject) => {
    //validamos que sean arrays plataform y genres
    if (typeof plataformsID != "object" || typeof genresID != "object")
      return reject({ err: "data invalid(platoforms or genres))" });
    try {
      //nos aseguramos que las array tengan numeros
      plataformsID = plataformsID.map((x) => parseInt(x));

      //creamos videojuego y requerimos la lista de plaformas y genereos disponibles
      let videogame = await Videogame.create({
        name,
        image,
        launch,
        description,
      });
      let plataforms = await Plataform.findAll();
      let genres = await Genre.findAll();

      //filtramos la lista para que solo queden las que se  van a asociar
      let plataformsSelected = plataforms.filter((x) =>
        plataformsID.includes(x.dataValues.id)
      );
      let genresSelected = genres.filter((x) =>
        genresID.includes(x.dataValues.id)
      );
      //realizamos las respectivas relaciones
      await videogame.addPlataforms(plataformsSelected);
      await videogame.addGenres(genresSelected);
    } catch (error) {
      console.log(error);
    }
  });
  return p;
}

function updatePlataforms() {
  let p = new Promise((resolve, reject) => {
    fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}&page_size=100`)
      .then((x) => x.json())
      .then((x) => {
        if (x.results) {
          x.results.forEach((platform) => {
            let url = "https://www.google.com/search?q=" + platform.name;
            let match = platform.name.toLowerCase();
            if (match.includes("xbox"))
              url = "https://www.xbox.com/es-ES/games";
            else if (match.includes("playstation") || match.includes("ps"))
              url = "https://store.playstation.com/es-co/pages/latest";
            else if (match.includes("nintendo"))
              url = "http://store.nintendo.co/games/all-released-games";
            else if (match.includes("atari"))
              url = "https://www.amazon.com/s?k=atari+2600+console";
            else if (
              match.includes("pc") ||
              match.includes("apple") ||
              match.includes("mac") ||
              match.includes("linux")
            )
              url = "https://store.steampowered.com/";
            else if (match.includes("android"))
              url = "https://play.google.com/store/games";
            else if (match.includes("ios"))
              url = "https://www.apple.com/co/app-store/";

            console.log(url);
            Plataform.create({
              api: platform.id,
              name: platform.name,
              url,
            }).catch((e) => console.log({ err: e }));
          });
        }
        resolve("hola");
      });
  });

  return p;
}

function updateGenres() {
  let p = new Promise((resolve, reject) => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}&page_size=100`)
      .then((x) => x.json())
      .then((x) => {
        if (x.results) {
          x.results.forEach((genre) => {
            Genre.create({
              name: genre.name,
              games_count: genre.games_count,
              image: genre.image_background,
            }).catch((e) => console.log({ err: e }));
          });
        }
        resolve({ msg: "se ha actualizado la los generos con exito" });
      })
      .catch((e) => reject({ err: e }));
  });

  return p;
}

updateGenres().then((r) => console.log(r));
