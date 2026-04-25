const express = require('express');
const router = express.Router();
const videojuegosController = require('../controllers/videojuegosController');

router.put("/:id", videojuegosController.actualizarVideojuegos); 

module.exports = router;