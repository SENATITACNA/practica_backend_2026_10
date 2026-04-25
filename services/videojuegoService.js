const videojuegoRepository = require("../repositories/videojuegoRepository");

const crearVideoJuego = (videojuego, callback) => {
  videojuegoRepository.crearVideoJuego(videojuego, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, {
        mensaje: "Videojuego creado correctamente",
        id: resultado.insertId,
      });
    }
  });
};

module.exports = {
  crearVideoJuego,
};
