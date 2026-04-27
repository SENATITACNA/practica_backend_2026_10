const productoRepository = require("../repositories/VideojuegoRepository"); 
const borrarVideojuego = (id, callback) => {
    VideojuegoRepository.borrarVideojuego(id, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                mensaje: "Videojuego borrado correctamente"
            });
        }
    });
};

module.exports = {
    borrarVideojuego
}; 
