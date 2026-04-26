const videojuegoRepository = require("../repositories/videojuegoRepository");

const listarVideojuegos = (callback) => {
  videojuegoRepository.obtenerVideojuegos((err, videojuegos) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, videojuegos);
    }
  });
};

module.exports = { listarVideojuegos };