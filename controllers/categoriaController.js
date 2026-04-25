const categoriaService = require("../services/categoriaService");

const actualizarCategoria = (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  categoriaService.actualizarCategoria(id, datos, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al actualizar la categoría" });
    } else {
      res.status(200).json({
        mensaje: "Categoría actualizada correctamente"
      });
    }
  });
};

module.exports = {
  actualizarCategoria,
};