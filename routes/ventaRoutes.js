const express = require("express");
const router = express.Router();
const ventaController = require("../controllers/ventaController");

router.get("/ventas", ventaController.obtenerVentas);

module.exports = router;