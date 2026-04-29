const express = require("express");
const router = express.Router();
const ventaController = require("../controllers/ventaController");
router.post("/ventas", ventaController.crearVenta);
router.delete("/ventas/:id", ventaController.eliminarVenta);
module.exports = router;