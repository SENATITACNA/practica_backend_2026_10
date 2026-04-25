const db = require("../config/db");

const actualizarVenta = (id, datos, callback) => {
    const { cliente_id, videojuego_id, cantidad, total } = datos;
    const sql = "UPDATE ventas SET cliente_id = ?, videojuego_id = ?, cantidad = ?, total = ? WHERE id = ?";
    
    db.query(sql, [cliente_id, videojuego_id, cantidad, total, id], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = { actualizarVenta };