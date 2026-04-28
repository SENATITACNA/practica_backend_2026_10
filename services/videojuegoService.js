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
const eliminarVideojuego = (id, callback) => {
  videojuegoRepository.eliminarVideojuego(id, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { mensaje: "Videojuego eliminado correctamente" });
    }
  });
};
module.exports = {
  crearVideoJuego,
  eliminarVideojuego
};
