const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/controllersCliente');

// DELETE cliente por ID
router.delete('/clientes/:id', clienteController.eliminarCliente);

module.exports = router;