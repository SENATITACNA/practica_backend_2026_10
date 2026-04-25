const express = require("express");
const router = express.Router();
const controllerClientes = require("../controllers/controllerClientes");

router.get("/clientes", controllerClientes.obtenerClientes);

module.exports = router;