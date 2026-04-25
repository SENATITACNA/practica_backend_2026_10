const clienteRepository = require("../repositories/clienteRepository");

const obtenerClientes = (callback) => {
    clienteRepository.obtenerClientes((err, clientes) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, clientes);
        }
    });
};

module.exports = { obtenerClientes };