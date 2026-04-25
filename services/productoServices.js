const productoRepository = require("../repositories/productoRepositories");
const eliminarVideojuego = (id, callback) => {
 productoRepository.eliminarVideojuego(id, (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, { mensaje: "Producto eliminado correctamente" });
const crearVenta = (venta, callback) => {
 productoRepository.crearVenta(venta, (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, { 
    mensaje: "Venta registrada correctamente", 
    id: resultado.insertId 
   });
  }
 });
};
module.exports = {
 eliminarVideojuego
 crearVenta
};