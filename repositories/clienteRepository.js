const db = require("../config/db");

const obtenerClientes = (callback) => {
    const sql = "SELECT * FROM clientes"; // Asegúrate de que la tabla sea "clientes" en minúsculas
    db.query(sql, (err, resultados) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultados);
        }
    });
};

module.exports = { obtenerClientes };