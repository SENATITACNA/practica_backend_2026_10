const db = require("../config/db");
const listarCategorias = (callback) => {
 const sql = "SELECT * FROM categorias";
 db.query(sql, (err, resultados) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, resultados);
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
 listarCategorias
 crearVenta
};