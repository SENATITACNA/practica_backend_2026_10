const productoService = require("../services/productoServices");
const listarCategorias = (req, res) => {
 productoService.listarCategorias((err, categorias) => {
  if (err) {
   res.status(500).json({ error: "Error del servidor" });
  } else {
   res.json(categorias);
  }
 });
};
module.exports = {
 listarCategorias
};
