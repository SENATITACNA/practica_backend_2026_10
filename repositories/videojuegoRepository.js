const db = require("../config/db");
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
const eliminarVideojuego = (id, callback) => {
 const sql = "DELETE FROM videojuegos WHERE id = ?";
 db.query(sql, [id], (err, resultado) => {
 if (err) {
   callback(err, null);
  } else {
   callback(null, resultado);
  }
 });
};
module.exports = {
  crearVideoJuego,
  eliminarVideojuego
};