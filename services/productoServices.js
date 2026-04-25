const productoRepository = require("../repositories/productoRepositories");
const actualizarCliente = (id, cliente, callback) => {
 productoRepository.actualizarCliente(id, cliente, (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, { mensaje: "Cliente actualizado correctamente" });
  }
 });
};

module.exports = {
 actualizarCliente,
};