const categoriaService = require("../services/categoriaService");

const crearCategoria = (req, res) => {
  const nuevaCategoria = req.body;
  categoriaService.crearCategoria(nuevaCategoria, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al crear categoría" });
    } else {
      res.status(201).json(resultado);
    }
  });
};

module.exports = { crearCategoria };