const db = require("../config/db");

const eliminarVideojuego = (id, callback) => {
    // Cambia "Videojuego" por "videojuegos"
    const sql = "DELETE FROM videojuegos WHERE id = ?"; 
    
    db.query(sql, [id], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = { eliminarVideojuego };
