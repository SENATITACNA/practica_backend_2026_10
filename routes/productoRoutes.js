const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoControllers");
router.delete("/videojuegos/:id", productoController.eliminarVideojuego);
router.get("/categorias", productoController.listarCategorias);
router.post("/ventas", productoController.crearVenta);
module.exports = router;