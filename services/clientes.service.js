const clientesRepository = require("../repositories/clientes.repository");

const listarClientes = (callback) => {
    clientesRepository.obtenerClientes((err, clientes) => {
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