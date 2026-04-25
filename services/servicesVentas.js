const ventasRepository = require('../repositories/repositoriesVentas');

const actualizarCliente = async (id, cliente_id) => {
    return await ventasRepository.actualizarCliente(id, cliente_id);
};

module.exports = {
    actualizarCliente
};