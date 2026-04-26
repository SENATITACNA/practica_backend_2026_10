const db = require("../config/db");

const obtenerVideojuegos = (callback) => {
  const sql = "SELECT * FROM videojuegos";
  db.query(sql, (err, resultados) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, resultados);
    }
  });
};

module.exports = { obtenerVideojuegos };