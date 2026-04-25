const db = require("../config/db");

const actualizarCategoria = (id, datos, callback) => {
  const sql = "UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?";

  db.query(sql, [datos.nombre, datos.descripcion, id], (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resultado);
    }
  });
};

module.exports = {
  actualizarCategoria,
};