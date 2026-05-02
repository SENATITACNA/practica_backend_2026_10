const db = require("../config/db");
const eliminarCliente = (id, callback) => {
 const sql = "DELETE FROM clientes WHERE id = ?";
 db.query(sql, [id], (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, resultado);
  }
 });
};

module.exports = { 
    eliminarCliente 
};