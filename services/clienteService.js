const clienteRepository = require("../repositories/clienteRepository");

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