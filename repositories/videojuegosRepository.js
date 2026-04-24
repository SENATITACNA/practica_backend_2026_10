const db = require("../config/db");
const actualizarvideojuegos = (id, videojuegos, callback) => {
 const sql = "UPDATE videosjuegos SET nombre = ?, precio = ?, consola = ?, stosk = ? WHERE id = ?";
 db.query(sql, [videojuegos.nombre, videojuegos.precio, id], (err, resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, resultado);
 }
 });
};


module.exports = {
    actualizarvideojuegos
};