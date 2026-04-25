const videojuegoRepository = require("../repositories/videojuegoRepository");

const modificarVideojuego = (id, datos, callback) => {
    // Aquí se podría poner lógica, como validar que el stock no sea negativo
    videojuegoRepository.actualizarVideojuego(id, datos, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = { modificarVideojuego };