const ventasModel = require('../models/modelsVentas');

const actualizarCliente = async (id, cliente_id) => {
    const result = await ventasModel.actualizarClientePorId(id, cliente_id);
    return result.affectedRows;
};

module.exports = {
    actualizarCliente
};