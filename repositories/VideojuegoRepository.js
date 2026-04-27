const db = require('../config/Database');

const borrarVideojuego = (id, callback) => {
    const query = "DELETE FROM videojuegos WHERE id = ?";
    db.query(query, [id], (err, resultado) => {
        if (err) {
            console.error("Error al borrar videojuego:", err);
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = {
    borrarVideojuego
};

