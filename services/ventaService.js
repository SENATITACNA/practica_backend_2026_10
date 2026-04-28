const ventaRepository = require("../repositories/ventaRepository");
const crearVenta = (venta, callback) => {
    ventaRepository.crearVenta(venta, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                mensaje: "Venta registrada correctamente",
                id: resultado.insertId
            });
        }
    });
};
module.exports = {
    crearVenta
};