const db = require("../config/db");

const crearVenta = (venta, callback) => {
  const sql = `
    INSERT INTO ventas (cliente_id, videojuego_id, cantidad, total)
    VALUES (?,?,?,?)
  `;

  db.query( sql,  [ venta.cliente_id, venta.videojuego_id, venta.cantidad, venta.total ], (err, resultado) => {
      if (err) return callback(err, null);
      callback(null, resultado);
    }
  );
};

module.exports = {
    crearVenta
};
