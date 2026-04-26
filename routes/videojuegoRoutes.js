const express = require("express");
const router = express.Router();
const videojuegoController = require("../controllers/videojuegoController");

router.get("/videojuegos", videojuegoController.obtenerVideojuegos);

module.exports = router;