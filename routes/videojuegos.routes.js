const express = require ("express");
const router = express.Router();
const videojuegosController = require("../controllers/videojuegos.controller");

router.put('/videojuegos/:id', videojuegosController.actualizarVideojuego);

module.exports = router;