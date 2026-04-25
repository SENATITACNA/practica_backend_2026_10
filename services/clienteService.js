const clienteRepository = require("../repositories/clienteRepository");
const listarClientes = (callback) => {
 clienteRepository.obtenerClientes((err, clientes) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, clientes);
 }
 });
};

module.exports = {
 listarClientes
};

const eliminarCliente = (id, callback) => {
 clienteRepository.eliminarCliente(id, (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, {
    mensaje: "Cliente eliminado correctamente",
    filasAfectadas: resultado.affectedRows
   });
  }
 });
};

module.exports = { eliminarCliente };
