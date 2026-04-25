const repositoryVideojuegos = require("../repositories/repositoryVideojuegos");

const eliminarVideojuego = (id, callback) => {
    repositoryVideojuegos.eliminarVideojuego(id, (err, resultado) => {
        callback(err, {
            mensaje: "Videojuego eliminado correctamente"
        });
    });
};

module.exports = {
    eliminarVideojuego
};