const videojuegoService = require("../services/videojuegoService");

const eliminarVideojuego = (req, res) => {
  const id = req.params.id;
  videojuegoService.eliminarVideojuego(id, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al eliminar el videojuego" });
    } else {
      res.json({ mensaje: "Videojuego eliminado con éxito", id });
    }
  });
};

module.exports = { eliminarVideojuego };