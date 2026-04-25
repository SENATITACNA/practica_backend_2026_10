const clienteRepository = require('../repositories/clienteRepository');

const createCliente = async (cliente) => {
    return await clienteRepository.create(cliente);
};

module.exports = {
    createCliente
};