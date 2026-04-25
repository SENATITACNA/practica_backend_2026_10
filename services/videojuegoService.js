const videojuegoRepository = require("../repositories/videojuegoRepository");

const crearVideojuego = (videojuego, callback) => {
    videojuegoRepository.crearVideojuego(videojuego, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                mensaje: "Videojuego creado correctamente",
                id: resultado.insertId
            });
        }
    });
};

module.exports = {
    crearVideojuego
};