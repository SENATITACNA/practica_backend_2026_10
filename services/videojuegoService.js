const videojuegoRepository = require("../repositories/videojuegoRepository");

const eliminarVideojuego = (id, callback) => {
    videojuegoRepository.eliminarVideojuego(id, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                mensaje: "Videojuego eliminado correctamente",
                id: id
            });
        }
    });
};

module.exports = { eliminarVideojuego };