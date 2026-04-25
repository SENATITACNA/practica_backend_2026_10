const express = require('express');
const router = express.Router();
const videojuegosController = require('../controllers/videojuegoController');

router.get('/videojuegos', videojuegosController.getVideojuegos);

module.exports = router;