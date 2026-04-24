const videojuegosRepositories = require("../repositories/videojuegosRepositories");

const crearvideojuego = (producto, callback) => {
 videojuegosRepositories.crearvideojuego(producto, (err, resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, {
 mensaje: "Producto creado correctamente",
 id: resultado.insertId
 });
 }
 });
};

module.exports={
crearvideojuego
};