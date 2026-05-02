const db = require("../config/db");

const crearCategoria = (categoria, callback) => {
  const sql = "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)";
  db.query(sql, [categoria.nombre, categoria.descripcion], (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resultado);
    }
  });
};

const listarCategorias = (callback) => {
  const sql = "SELECT * FROM categorias";

  db.query(sql, (err, resultados) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resultados);
    }
  });
};

module.exports = {
  actualizarCategoria,
  listarCategorias
};
