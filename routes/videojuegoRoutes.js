const express = require("express");
const router = express.Router();
const videojuegoController = require("../controllers/videojuegoController");
router.put("/videojuegos/:id", videojuegoController.actualizarVideojuego);

router.post("/videojuegos", videojuegoController.crearVideoJuego);

module.exports = router;