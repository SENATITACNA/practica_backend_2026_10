const categoriaRepository = require("../repositories/categoriaRepository");

const crearCategoria = (categoria, callback) => {
  categoriaRepository.crearCategoria(categoria, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { mensaje: "Categoría creada correctamente", id: resultado.insertId });
    }
  });
};

module.exports = { crearCategoria };