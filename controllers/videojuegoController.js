const videojuegoService = require("../services/videojuegoService");

const crearVideojuego = (req, res) => {
    const nuevoVideojuego = req.body;
    videojuegoService.crearVideojuego(nuevoVideojuego, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: "Error al crear videojuego"});
        } else {
            res.status(201).json(resultado);
        }
    });
};

module.exports = {
    crearVideojuego
};