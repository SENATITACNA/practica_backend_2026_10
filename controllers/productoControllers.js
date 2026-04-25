const productoService = require("../services/productoServices");
const eliminarVideojuego = (req, res) => {
 const id = req.params.id;
 productoService.eliminarVideojuego(id, (err, resultado) => {
  if (err) {
   res.status(500).json({ error: "Error al eliminar producto" });
  } else {
   res.json(resultado);
const listarCategorias = (req, res) => {
 productoService.listarCategorias((err, categorias) => {
  if (err) {
   res.status(500).json({ error: "Error del servidor" });
  } else {
   res.json(categorias);
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
 eliminarVideojuego
 listarCategorias
 crearVenta
};
