const videojuegoRepository = require("../repositories/videojuegoRepository");

const listarVideojuego = (callback) => {
    productoRepository.obtenerjuego((err, videojuego) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, videojuego);
        }
    });
};

module.exports = {
 listarVideojuego
};