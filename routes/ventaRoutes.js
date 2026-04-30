const express = require("express");
const router = express.Router();
const ventasController = require("../controllers/ventasController");

router.delete("/ventas/:id", ventasController.eliminarVenta);

module.exports = router;