const { videojuegosRepository} = require("../repositories/videojuegosRepository");

const actualizarVideojuegos = (id, producto, callback) => {
 productoRepository.actualizarVideojuegos(id, producto, (err, resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, {
 mensaje: "Producto actualizado correctamente"
 });
 }
 });
};

module.exports = {
 actualizarVideojuegos
};