const db = require("../config/db");
const crearProducto = (producto, callback) => {
 const sql = "INSERT INTO productos (nombre, precio) VALUES (?,?)";
 db.query(sql, [producto.nombre, producto.precio], (err,
resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, resultado);
 }
 });
};
Y exportarlo:
module.exports = {
 obtenerProductos,
 crearProducto
};
const obtenerProductos = (callback) => {
 const sql = "SELECT * FROM productos";
 db.query(sql, (err, resultados) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, resultados);
 }
 });
};
module.exports = {
 obtenerProductos
};