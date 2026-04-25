class videojuegos {
 constructor(id, nombre, precio, consola, stock) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.consola = consola;
  this.stock = stock;
 }
}
class clientes {
 constructor(id, nombre, correo, telefono) {
 this.id = id;
 this.nombre = nombre;
 this.correo = correo;
 this.telefono = telefono;
 }
}
class ventas {
 constructor(id, cliente_id, videojuego_id, cantidad, total) {
  this.id = id;
  this.cliente_id = cliente_id;
  this.videojuego_id = videojuego_id;
  this.cantidad = cantidad;
  this.total = total;
 }
}
class categorias {
 constructor(id, nombre, descripcion) {
 this.id = id;
 this.nombre = nombre;
 this.descripcion = descripcion;
 }
}
module.exports = { videojuegos, clientes, ventas, categorias };
