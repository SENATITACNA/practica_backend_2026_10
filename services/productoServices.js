const productoRepository = require("../repositories/productoRepositories");
const actualizarCliente = (id, cliente, callback) => {
 productoRepository.actualizarCliente(id, cliente, (err, resultado) => {
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
   callback(null, { mensaje: "Cliente actualizado correctamente" });
  }
 });
};

module.exports = {
 actualizarCliente,
 listarCategorias,
 crearVenta
};