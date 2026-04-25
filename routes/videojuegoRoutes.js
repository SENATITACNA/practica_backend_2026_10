const express = require("express");
const router = express.Router();
const videojuegoController = require("../controllers/videojuegoController");
router.post("/videojuegos", videojuegoController.crearVideojuego);
module.exports = router;