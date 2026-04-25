const videojuegoRepository = require("../repositories/videojuegoRepository");

const actualizarVideojuego = (id, videojuego, callback) => {
  videojuegoRepository.actualizarVideojuego(id, videojuego, (err, resultado) => {
    if (err) {
      return callback(err, null);
    }

    if (resultado.affectedRows === 0) {
      return callback({ mensaje: "Videojuego no encontrado" }, null);
    }

    callback(null, {
      mensaje: "Videojuego actualizado correctamente"
    });
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
  actualizarVideojuego
};
  crearVideoJuego,
};
