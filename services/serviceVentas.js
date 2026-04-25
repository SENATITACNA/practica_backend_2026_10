const repositoryVentas = require("../repositories/repositoryVentas");

const crearVenta = (venta, callback) => {
    if (!venta) {
        return callback(new Error("Venta no recibida en service"), null);
    }
    
    repositoryVentas.crearVenta(venta, (err, resultado) => {
        if (err) {
            return callback(err, null);
        } else {
            callback(null, {
                mensaje: "Creado correctamente",
                id: resultado.insertId
            });
        }
    });
};

module.exports = {
    crearVenta
};