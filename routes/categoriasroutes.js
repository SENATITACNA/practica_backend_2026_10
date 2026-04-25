const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriascontrollers');

// GET todas las categorias
router.get('/categorias', categoriasController.obtenerCategorias);

module.exports = router;