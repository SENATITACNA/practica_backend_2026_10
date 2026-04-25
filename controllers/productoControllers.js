const productoService = require("../services/productoServices");
const actualizarCliente = (req, res) => {
 const id = req.params.id;
 const clienteActualizado = req.body;
 productoService.actualizarCliente(id, clienteActualizado, (err, resultado) => {
  if (err) {
   res.status(500).json({ error: "Error al actualizar cliente" });
  } else {
   res.json(resultado);
const crearVenta = (req, res) => {
 const nuevaVenta = req.body;
 productoService.crearVenta(nuevaVenta, (err, resultado) => {
  if (err) {
   res.status(500).json({ error: err.message });
  } else {
   res.status(201).json(resultado);
  }
 });
};
module.exports = {
 actualizarCliente,
 crearVenta
};
