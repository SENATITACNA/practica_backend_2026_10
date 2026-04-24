const express = require("express");
const router = express.Router();
const videojuegosController = require("../controllers/videojuegosoController");
router.put("/productos/:id", productoController.actualizarProducto);
module.exports = router;