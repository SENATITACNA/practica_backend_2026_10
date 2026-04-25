const productoRepository = require("../repositories/productoRepositories");
const listarCategorias = (callback) => {
 productoRepository.listarCategorias((err, categorias) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, categorias);
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
 listarCategorias
 crearVenta
};