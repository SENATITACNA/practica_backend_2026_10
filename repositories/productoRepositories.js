const db = require("../config/db");
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
 listarCategorias
};