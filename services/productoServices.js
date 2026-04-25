const productoRepository = require("../repositories/productoRepositories");
const eliminarVideojuego = (id, callback) => {
 productoRepository.eliminarVideojuego(id, (err, resultado) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, { mensaje: "Producto eliminado correctamente" });
  }
 });
};
module.exports = {
 eliminarVideojuego
};