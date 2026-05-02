const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.put("/clientes/:id", clienteController.actualizarCliente);
router.delete("/clientes/:id", clienteController.eliminarCliente);
module.exports = router;