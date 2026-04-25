const clienteRepository = require("../repositories/clienteRepository");

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

module.exports = {
    actualizarCliente
};