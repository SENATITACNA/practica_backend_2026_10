const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoControllers");
router.put("/clientes/:id", productoController.actualizarCliente);
module.exports = router;