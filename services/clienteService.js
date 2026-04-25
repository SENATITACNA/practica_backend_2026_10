const clienteRepository = require("../repositories/clienteRepository");

//Obtener Cliente - GET /api/clientes
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