const categoriaService = require("../services/categoriaService");

const obtenerCategorias = (req, res) => {
    categoriaService.obtenerCategorias((err, resultados) => {
        if (err) {
            res.status(500).json({ error: "Error al obtener categorías" });
        } else {
            res.json(resultados);
        }
    });
};

const crearCategoria = (req, res) => {
    const nuevaCategoria = req.body; // Aquí llega tu JSON
    categoriaService.crearCategoria(nuevaCategoria, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: "Error al crear", detalle: err.sqlMessage });
        } else {
            res.status(201).json({ 
                mensaje: "Categoría creada con éxito", 
                id: resultado.insertId 
            });
        }
    });
};

module.exports = { obtenerCategorias, crearCategoria };