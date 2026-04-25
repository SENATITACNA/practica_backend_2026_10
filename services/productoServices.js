const productoRepository = require("../repositories/productoRepositories");
const eliminarVideojuego = (id, callback) => {
 productoRepository.eliminarVideojuego(id, (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, { mensaje: "Producto eliminado correctamente" });
  }
 });
};
const actualizarCliente = (id, cliente, callback) => {
 productoRepository.actualizarCliente(id, cliente, (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, { mensaje: "Cliente actualizado correctamente" });
  }
 });
};
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
const listarCategorias = (callback) => {
 productoRepository.listarCategorias((err, categorias) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, categorias);
  }
 });
};
module.exports = {
 eliminarVideojuego,
 actualizarCliente,
 crearVenta,
 listarCategorias
};