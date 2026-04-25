const db = require("../config/db");

const actualizarCategorias = (id, categoria, callback) => {
    const sql = "UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?";
    
    db.query(sql, [categoria.nombre, categoria.descripcion, id], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = { actualizarCategorias };
