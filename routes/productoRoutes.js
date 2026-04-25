const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoControllers");
router.put("/clientes/:id", productoController.actualizarCliente);
router.post("/ventas", productoController.crearVenta);
module.exports = router;