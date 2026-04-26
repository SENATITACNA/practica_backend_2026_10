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