const categoriaRepository = require("../repositories/categoriaRepository");

const crearCategoria = (categoria, callback) => {
  categoriaRepository.crearCategoria(categoria, (err, resultado) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, {
      mensaje: "Categoría creada correctamente",
      id: resultado.insertId
    });
  });
};

const actualizarCategoria = (id, datos, callback) => {
  categoriaRepository.actualizarCategoria(id, datos, (err, resultado) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, resultado);
  });
};

const listarCategorias = (callback) => {
  categoriaRepository.listarCategorias((err, categorias) => {
    if (err) {
      return callback(err, null);
    }

    callback(null, categorias);
  });
};

module.exports = {
  crearCategoria,
  actualizarCategoria,
  listarCategorias
};
