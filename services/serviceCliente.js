const clienteRepository = require('../repositories/repositoriesCliente');

exports.eliminarCliente = async (id) => {
    return await clienteRepository.eliminarCliente(id);
};