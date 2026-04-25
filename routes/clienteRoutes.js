const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
router.put("/clientes/:id", clienteController.actualizarCliente);
module.exports = router;