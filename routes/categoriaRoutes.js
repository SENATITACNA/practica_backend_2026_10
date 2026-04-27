const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.put("/categorias/:id", categoriaController.actualizarCategoria);

router.get("/categorias", categoriaController.listarCategorias);
module.exports = router;