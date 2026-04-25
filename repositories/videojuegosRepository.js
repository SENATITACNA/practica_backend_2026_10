const db = require("../config/db");

const actualizarvideojuegos = (id, videojuegos, callback) => {
  const sql = "UPDATE videojuegos SET nombre = ?, precio = ?, consola = ?, stock = ? WHERE id = ?";
  
  db.query(
    sql, 
    [videojuegos.nombre, videojuegos.precio, videojuegos.consola, videojuegos.stock, id], 
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
  actualizarvideojuegos
};