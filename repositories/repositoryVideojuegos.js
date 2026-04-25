const db = require("../config/db");

const eliminarVideojuego = (id, callback) => {
    const sql = "DELETE FROM videojuegos WHERE id = ?";

    db.query(sql, [id], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(err, resultado);
        }
    });
};

module.exports = {
    eliminarVideojuego
};
