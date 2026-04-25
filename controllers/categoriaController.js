const categoriaService = require("../services/categoriaService");

const obtenerCategorias = (req, res) => {
    categoriaService.listarCategorias((err, categorias) => {
        if (err) {
            res.status(500).json({ error: "Error del servidor" });
        } else {
            res.json(categorias);
        }
    });
};

module.exports = {
    obtenerCategorias
};