class videojuegos {
 constructor(id, nombre, precio, consola, stock) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.consola = consola;
  this.stock = stock;
 }
}
module.exports = { videojuegos};
class ventas {
 constructor(id, cliente_id, videojuego_id, cantidad, total) {
  this.id = id;
  this.cliente_id = cliente_id;
  this.videojuego_id = videojuego_id;
  this.cantidad = cantidad;
  this.total = total;
 }
}
module.exports = { ventas };
