const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoControllers");
router.post("/ventas", productoController.crearVenta);
module.exports = router;