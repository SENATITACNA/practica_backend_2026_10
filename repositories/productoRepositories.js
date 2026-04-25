const db = require("../config/db");
const eliminarVideojuego = (id, callback) => {
 const sql = "DELETE FROM videojuegos WHERE id = ?";
 db.query(sql, [id], (err, resultado) => {
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
 eliminarVideojuego
 crearVenta
};