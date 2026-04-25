const videojuegosRepository = require('../repositories/videojuegos.repository');

const getVideojuegos = async () => {
    return await videojuegosRepository.getAll();
};

module.exports = {
    getVideojuegos
};