const crearVideoJuego = (videojuegos, callback) => {
 videojuegoRepository.crearVideoJuego(videojuegos, (err, resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, {
 mensaje: "Videojuego creado correctamente",
 id: resultado.insertId
 });
 }
 });
};

module.exports = {

 crearVideoJuego,

};
