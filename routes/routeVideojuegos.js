const express = require("express");
const router = express.Router();
const controllerVideojuegos = require("../controllers/controllerVideojuegos");

router.delete("/videojuegos/:id", controllerVideojuegos.eliminarVideojuego);

module.exports = router;