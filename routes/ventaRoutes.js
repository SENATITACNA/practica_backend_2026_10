const express = require("express");
const router = express.Router();
const ventaController = require("../controllers/ventaController");

router.put("/ventas/:id", ventaController.actualizarVenta);

module.exports = router;