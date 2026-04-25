const db = require("../config/db");

const obtenerClientes = (callback) => {
    const sql = "SELECT * FROM clientes";
    
    db.query(sql, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = { obtenerClientes };
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

module.exports = { eliminarCliente };
