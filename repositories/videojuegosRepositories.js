const db = require("../config/db");

const crearvideojuego = (videojuegos, callback) => {
 const sql = "INSERT INTO videojuegos (nombre, precio , consola ,sctok) VALUES (?,?,?,?)";
 db.query(sql, [videojuegos.nombre, videojuegos.precio,videojuegos.precio,videojuegos.stock], (err,
resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, resultado);
 }
 });
};

 module.exports = {
    crearvideojuego
 };