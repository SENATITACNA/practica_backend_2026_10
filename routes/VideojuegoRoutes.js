const express = require("express"); 
const router = express.Router(); 
const VideojuegoController = require("../controllers/VideojuegoController");

//endpoints
router.delete("/videojuegos/:id", VideojuegoController.borrarVideojuego);
module.exports = router; 