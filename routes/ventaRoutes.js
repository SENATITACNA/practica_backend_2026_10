const express = require("express");
const router = express.Router();
const ventaController = require("../controllers/ventaController");

router.delete("/ventas/:id", ventaController.eliminarVenta);

router.post("/ventas", ventaController.crearVenta);
module.exports = router;