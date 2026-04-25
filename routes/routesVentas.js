const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/controllersVentas');

// PUT: actualizar cliente_id por id de venta
router.put('/ventas/:id', ventasController.actualizarCliente);

module.exports = router;