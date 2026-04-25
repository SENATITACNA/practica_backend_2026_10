const clienteRepository = require("../repositories/clienteRepository");

const obtenerClientes = (callback) => {
    clienteRepository.obtenerClientes((err, resultados) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultados);
        }
    });
};

module.exports = { obtenerClientes };
