const db = require("../config/db");

const obtenerCategorias = (callback) => {
    const sql = "SELECT * FROM categorias"; // O "categoria" si está en singular
    db.query(sql, (err, resultados) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultados);
        }
    });
};

const crearCategoria = (datos, callback) => {
    const sql = "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)";
    db.query(sql, [datos.nombre, datos.descripcion], callback);
};

module.exports = { obtenerCategorias, crearCategoria };