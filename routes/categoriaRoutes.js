const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
router.get("/categorias", categoriaController.obtenerCategoria);
router.put("/categorias/:id", categoriaController.actualizarCategoria);
module.exports = router;