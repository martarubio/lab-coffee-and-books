const router = require("express").Router();
const Place = require("../models/Place.model");

// RUTA PARA MOSTRAR LA LISTA DE PLACES
//URL con "/"
router.get("/", (req, res, next) => {
  Place.find()
    //nombre de archivo
    .then((allPlaces) => res.render("places-list", { places: allPlaces }))
    .catch((err) => console.log(err));
});

//CREAR

router.get("/create", (req, res) => res.render("places-create"));

router.post("/create", (req, res) => {
  const { name, type, unique } = req.body;
  Place.create({ name, type })
    .then((createdPlace) => res.redirect("/places"))
    .catch((err) => console.log(err));
});

module.exports = router;
