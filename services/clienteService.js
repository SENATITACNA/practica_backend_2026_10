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