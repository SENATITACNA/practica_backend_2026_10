class clientes {
 constructor(id, nombre, correo, telefono) {
 this.id = id;
 this.nombre = nombre;
 this.correo = correo;
 this.telefono = telefono;
 }
}
module.exports = { clientes };
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
