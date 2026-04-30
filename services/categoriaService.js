const categoriaRepository = require("../repositories/categoriaRepository");

const actualizarCategoria = (id, datos, callback) => {
  categoriaRepository.actualizarCategoria(id, datos, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resultado);
    }
  });
};

const listarCategorias = (callback) => {
  categoriaRepository.listarCategorias((err, categorias) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, categorias);
    }
  });
};

const eliminarCategoria = (id, callback) => {
  categoriaRepository.eliminarCategoria(id, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resultado);
    }
  });
};

module.exports = {
  actualizarCategoria,
  listarCategorias,
  eliminarCategoria
};