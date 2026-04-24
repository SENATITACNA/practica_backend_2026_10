const crearVideoJuego = (videojuegos, callback) => {
const sql = "INSERT INTO videojuegos (nombre, precio,console,stock) VALUES (?,?,?,?,?)";
 db.query(sql, [videojuegos.nombre, videojuegos.precio, videojuegos.console, videojuegos.stock], (err,
resultado) => {
 if (err) {
 callback(err, null);
 } else {
 callback(null, resultado);
 }
 });
};

module.exports = {
    crearVideoJuego
};