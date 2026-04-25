const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.put("/categorias/:id", categoriaController.actualizarCategorias);
module.exports = router;