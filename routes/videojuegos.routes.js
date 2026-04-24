const express = require('express');
const router = express.Router();
const videojuegosController = require('../controllers/videojuegos.controller');

router.get('/videojuegos', videojuegosController.getVideojuegos);

module.exports = router;