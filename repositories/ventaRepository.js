const db = require("../config/db");

const eliminarVenta = (id, callback) => {
    const sql = "DELETE FROM ventas WHERE id = ?";
    
    db.query(sql, [id], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = {
    eliminarVenta
};