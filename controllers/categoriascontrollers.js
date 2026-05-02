const categoriasService = require('../services/categoriasservices');

const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await categoriasService.obtenerCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    obtenerCategorias
};