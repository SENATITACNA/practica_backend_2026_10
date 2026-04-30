const clienteRepository = require('../repositories/clienteRepository');

const updateCliente = async (id, data) => {

    const clienteExiste = await clienteRepository.getById(id);

    if (!clienteExiste) {
        return null;
    }

    return await clienteRepository.update(id, data);
};

module.exports = {
    updateCliente
};