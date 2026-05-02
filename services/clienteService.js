const clienteRepository = require("../repositories/clienteRepository");

const actualizarCliente = (id, cliente, callback) => {
  clienteRepository.actualizarCliente(id, cliente, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { mensaje: "Cliente actualizado correctamente" });
    }
  });
};

module.exports = { actualizarCliente };
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
module.exports = { 
    eliminarCliente 
};
