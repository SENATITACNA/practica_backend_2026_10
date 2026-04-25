const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.delete("/clientes/:id", clienteController.eliminarCliente);

module.exports = router;