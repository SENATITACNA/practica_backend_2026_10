const db = require("../config/db");

const crearVideojuego = (videojuego, callback) => {
    const sql = "INSERT INTO videojuego  (nombre, precio, consola, stock) VALUES (?,?,?,?)";
    
    db.query(sql, [videojuego.nombre, videojuego.precio, videojuego.consola, videojuego.stock], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = {
    crearVideojuego
};