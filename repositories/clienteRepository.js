const db = require("../config/db");
//Obtener Cliente - GET /api/clientes
const obtenerClientes = (callback) => {
    const sql = "SELECT * FROM clientes";
    
    db.query(sql, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = { obtenerClientes };
