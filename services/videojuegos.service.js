const videojuegosRepository = require('../repositories/videojuegos.repository');

const actualizarVideojuego = (id, data) => {
    return videojuegosRepository.update(id, data);
};

module.exports = {
    actualizarVideojuego
};