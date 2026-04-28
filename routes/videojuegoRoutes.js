const express = require("express");
const router = express.Router();
const videojuegoController = require("../controllers/videojuegoController");
router.post("/videojuegos", videojuegoController.crearVideoJuego);
router.delete("/videojuegos/:id", videojuegoController.eliminarVideojuego);
module.exports = router;