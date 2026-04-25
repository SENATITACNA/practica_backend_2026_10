const videojuegoService = require("../services/videojuegoService");
const actualizarVideojuego = (req, res) => {
 const id = req.params.id;
 const videojuegoActualizado = req.body;
 videojuegoService.actualizarVideojuego(id, videojuegoActualizado, (err, resultado) => {
 if (err) {
 res.status(500).json({ error: "Error al actualizar videojuego" });
 } else {
 res.json(resultado);
 }
 });
};
module.exports = {
  actualizarVideojuego
const crearVideoJuego = (req, res) => {
  const nuevoVideoJuego = req.body;

  videojuegoService.crearVideoJuego(nuevoVideoJuego, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al crear videojuego" });
    } else {
      res.status(201).json(resultado);
    }
  });
};

module.exports = {
  crearVideoJuego,
};