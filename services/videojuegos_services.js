const videojuegosRepository = require('../repositories/videojuegos.repository');

const updateVideojuego = (id, data) => {
    return videojuegosRepository.update(id, data);
};

module.exports = {
    updateVideojuego
};