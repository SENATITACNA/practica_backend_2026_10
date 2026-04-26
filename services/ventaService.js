const ventaRepository = require("../repositories/ventaRepository");

const eliminarVenta = (id, callback) => {
  ventaRepository.eliminarVenta(id, (err, resultado) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, { mensaje: "Venta eliminada correctamente" });
    }
  });
};

module.exports = { eliminarVenta };