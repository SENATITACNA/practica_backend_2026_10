const categoriaService = require("../services/categoriaService");

const actualizarCategorias = (req, res) => {
  const id = req.params.id;
  const categoriaActualizada = req.body;

  categoriaService.actualizarCategorias(id, categoriaActualizada, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al actualizar Categoria" });
    } else {
      res.json(resultado);
    }
  });
};

module.exports = { actualizarCategorias };