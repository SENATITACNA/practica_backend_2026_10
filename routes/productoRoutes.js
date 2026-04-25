const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoControllers");
router.delete("/videojuegos/:id", productoController.eliminarVideojuego);
module.exports = router;