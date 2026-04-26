const categoriaService = require("../services/categoriaService");
const listarCategorias = (req, res) => {
 categoriaService.listarCategorias((err, categorias) => {
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