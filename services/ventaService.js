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
