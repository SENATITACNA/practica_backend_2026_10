const categoriasRepository = require('../repositories/categoriasrepositories');

const obtenerCategorias = async () => {
    return await categoriasRepository.obtenerCategorias();
};

module.exports = {
    obtenerCategorias
};