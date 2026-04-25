const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoControllers");
router.get("/categorias", productoController.listarCategorias);
module.exports = router;