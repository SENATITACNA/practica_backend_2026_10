const videojuegosRepository = require("../repositories/videojuegosRepository");

const actualizarVideojuegos = (id, producto, callback) => {
  videojuegosRepository.actualizarVideojuegos(id, producto, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, {
        mensaje: "Videojuego actualizado correctamente"
      });
    }
  });
};

module.exports = {
  actualizarVideojuegos
};