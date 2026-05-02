const categoriaService = require("../services/categoriaService");

const crearCategoria = (req, res) => {
  const nuevaCategoria = req.body;

  categoriaService.crearCategoria(nuevaCategoria, (err, resultado) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear categoría" });
    }

    res.status(201).json(resultado);
  });
};

const actualizarCategoria = (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  categoriaService.actualizarCategoria(id, datos, (err, resultado) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar la categoría" });
    }

    res.status(200).json({
      mensaje: "Categoría actualizada correctamente"
    });
  });
};

const listarCategorias = (req, res) => {
  categoriaService.listarCategorias((err, categorias) => {
    if (err) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    res.json(categorias);
  });
};

const eliminarCategoria = (req, res) => {
  const id = req.params.id;

  categoriaService.eliminarCategoria(id, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al eliminar la categoría" });
    } else {
      if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Categoría no encontrada" });
      }

      res.json({
        mensaje: "Categoría eliminada correctamente"
      });
    }
  });
};

module.exports = {
  crearCategoria,
  actualizarCategoria,
  listarCategorias,
  eliminarCategoria
};