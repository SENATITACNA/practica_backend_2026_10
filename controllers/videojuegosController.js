const videojuegosService = require("../services/videojuegosService");
const actualizarVideojuegos = (req, res) => {
 const id = req.params.id;
 const productoActualizado = req.body;
 productoService.actualizarVideojuegos(id, productoActualizado, (err, resultado) => {
 if (err) {
 res.status(500).json({ error: "Error al actualizar producto" });
 } else {
 res.json(resultado);
 }
 });
};

module.exports = {
 actualizarVideojuegos
};