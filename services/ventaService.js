const ventaRepository = require("../repositories/ventaRepository");

const eliminarVenta = (id, callback) => {
    ventaRepository.eliminarVenta(id, callback);
};

module.exports = {
    eliminarVenta
};