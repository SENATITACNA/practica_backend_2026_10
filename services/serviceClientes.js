const repositoryClientes = require("../repositories/repositoryClientes");

const obtenerClientes = (callback) => {
    repositoryClientes.obtenerClientes((err, clientes) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, clientes);
        }
    });
};

module.exports = { obtenerClientes };