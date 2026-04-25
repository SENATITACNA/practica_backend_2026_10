const db = require("../config/db");
const actualizarCliente = (id, cliente, callback) => {
 const sql = "UPDATE clientes SET nombre = ?, correo = ?, telefono = ? WHERE id = ?";
 db.query(sql, [cliente.nombre, cliente.correo, cliente.telefono, id], (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, resultado);
  }
 });
};
module.exports = {
 actualizarCliente
};