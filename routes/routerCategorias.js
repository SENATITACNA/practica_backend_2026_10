const express = require("express");
const router = express.Router();
const controllerCategorias = require("../controllers/controllerCategorias");

router.put("/categorias/:id", controllerCategorias.actualizarCategorias);
module.exports = router;