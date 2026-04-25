const db = require("../config/db");

const obtenerVentas = (callback) => {
 const sql = "SELECT * FROM ventas";
 db.query(sql, (err, resultados) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, resultados);
  }
 });
};

module.exports = { obtenerVentas };