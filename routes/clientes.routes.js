const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller");

router.get("/clientes", clientesController.obtenerClientes);

module.exports = router;