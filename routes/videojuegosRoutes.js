const express = require("express");
const router = express.Router();
const crearvideojuego = require("../controllers/videojuegosController");
router.post("/videojuegos", crearvideojuego.crearvideojuego);
module.exports = router;