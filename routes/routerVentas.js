const express = require("express");
const router = express.Router();
const controllerVentas = require("../controllers/controllerVentas");

router.post("/ventas", controllerVentas.crearVenta);

module.exports = router;
