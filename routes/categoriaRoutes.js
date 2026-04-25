const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
router.get("/categorias", categoriaController.obtenerCategorias);
module.exports = router;