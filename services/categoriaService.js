const categoriaRepository = require("../repositories/categoriaRepository");

const listarCategoria = (callback) => {
    categoriaRepository.obtenerCategoria((err, producto) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, producto);
        }
    });
};

const actualizarCategoria = (id, datos, callback) => {
  categoriaRepository.actualizarCategoria(id, datos, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resultado);
    }
  });
};

module.exports = {
  actualizarCategoria,
  listarCategoria
};