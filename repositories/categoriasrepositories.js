const categoriasModel = require('../models/categoriasmodels');

const obtenerCategorias = async () => {
    return await categoriasModel.obtenerCategorias();
};

module.exports = {
    obtenerCategorias
};