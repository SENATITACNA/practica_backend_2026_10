const videojuegoService = require("../services/videojuegoService");

const obtenerVideojuegos = (req, res) => {
  videojuegoService.listarVideojuegos((err, videojuegos) => {
    if (err) {
      res.status(500).json({ error: "Error del servidor" });
    } else {
      res.json(videojuegos);
    }
  });
};

module.exports = { obtenerVideojuegos };
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
const eliminarVideojuego = (req, res) => {
 const id = req.params.id;
 videojuegoService.eliminarVideojuego(id, (err, resultado) => {
  if (err) {
   res.status(500).json({ error: "Error al eliminar videojuego" });
  } else {
   res.json(resultado);
   }
  });
};
module.exports = {
  crearVideoJuego,
  eliminarVideojuego,
  obtenerVideojuegos
};
