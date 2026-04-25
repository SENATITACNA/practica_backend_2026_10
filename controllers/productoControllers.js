const productoService = require("../services/productoServices");
const eliminarVideojuego = (req, res) => {
 const id = req.params.id;
 productoService.eliminarVideojuego(id, (err, resultado) => {
  if (err) {
   res.status(500).json({ error: "Error al eliminar producto" });
  } else {
   res.json(resultado);
  }
 });
};
module.exports = {
 eliminarVideojuego
};
