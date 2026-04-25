const express = require("express");
const router = express.Router();
const videojuegoController = require("../controllers/videojuegoController");

// Ruta para actualizar por ID
router.put("/videojuegos/:id", videojuegoController.actualizar);

module.exports = router;