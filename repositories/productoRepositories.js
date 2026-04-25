const db = require("../config/db");
const actualizarCliente = (id, cliente, callback) => {
 const sql = "UPDATE clientes SET nombre = ?, correo = ?, telefono = ? WHERE id = ?";
 db.query(sql, [cliente.nombre, cliente.correo, cliente.telefono, id], (err, resultado) => {
const crearVenta = (venta, callback) => {
 const sql = "INSERT INTO ventas (cliente_id, videojuego_id, cantidad, total) VALUES (?,?,?,?)";
 db.query(sql, [venta.cliente_id, venta.videojuego_id, venta.cantidad, venta.total], (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, resultado);
  }
 });
};
module.exports = {
 actualizarCliente
 crearVenta
};