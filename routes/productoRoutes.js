const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoControllers");
router.delete("/videojuegos/:id", productoController.eliminarVideojuego);
router.put("/clientes/:id", productoController.actualizarCliente);
router.post("/ventas", productoController.crearVenta);
router.get("/categorias", productoController.listarCategorias);
module.exports = router;