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
  });
};

module.exports = {
  actualizarVideojuego
};