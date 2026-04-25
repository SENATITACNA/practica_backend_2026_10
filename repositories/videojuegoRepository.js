const db = require("../config/db");

const obtenerVideojuego = (callback) => {
    const sql = "SELECT * FROM videojuego";

    db.query(sql, (err, resultados) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultados);
        }
    });
};

module.exports = {
 obtenerVideojuego
};