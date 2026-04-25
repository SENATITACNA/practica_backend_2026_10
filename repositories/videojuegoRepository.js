const db = require("../config/db");

const actualizarVideojuego = (id, datos, callback) => {
    const sql = "UPDATE videojuegos SET nombre = ?, precio = ?, consola = ?, stock = ? WHERE id = ?";
    db.query(sql, [datos.nombre, datos.precio, datos.consola, datos.stock, id], (err, resultados) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultados);
        }
    });
};

module.exports = { actualizarVideojuego };