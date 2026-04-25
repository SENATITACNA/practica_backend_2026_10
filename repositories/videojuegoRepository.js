const db = require("../config/db");
const actualizarVideojuego = (id, videojuego, callback) => {
 const sql = "UPDATE videojuegos SET nombre = ?, precio = ?, consola = ?, stock = ? WHERE id = ?";
 db.query(sql, [videojuego.nombre, videojuego.precio, videojuego.consola, videojuego.stock, id], (err, resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, resultado);
 }
 });
};

module.exports = {
 actualizarVideojuego
const db = require("../config/db"); // asegúrate que existe

const crearVideoJuego = (videojuego, callback) => {
  const sql = "INSERT INTO videojuegos (nombre, precio, consola, stock) VALUES (?,?,?,?)";

  db.query(
    sql,
    [videojuego.nombre, videojuego.precio, videojuego.consola, videojuego.stock],
    (err, resultado) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, resultado);
      }
    }
  );
};

module.exports = {
  crearVideoJuego,
};