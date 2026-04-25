const videojuegosRepositories = require("../repositories/videojuegosRepositories");

const crearvideojuego = (videojuegos, callback) => {
 videojuegosRepositories.crearvideojuego(videojuegos, (err, resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, {
 mensaje: "videojuego creado correctamente",
 id: resultado.insertId
 });
 }
 });
};

module.exports={
crearvideojuego
};