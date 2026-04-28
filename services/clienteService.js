const clienteRepository = require("../repositories/clienteRepository");

const listarCliente = (callback) => {
    clienteRepository.obtenerClientes((err, cliente) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, cliente);
        }
    });
};

const actualizarCliente = (id, cliente, callback) => {
    clienteRepository.actualizarCliente(id, cliente, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                mensaje: "Cliente actualizado correctamente"
            });
        }
    });
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

module.exports = {
    listarCliente,
    actualizarCliente,
    eliminarCliente
};