const ventaRepository = require("../repositories/ventaRepository");

const actualizarVenta = (id, datos, callback) => {
    ventaRepository.actualizarVenta(id, datos, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = { actualizarVenta };