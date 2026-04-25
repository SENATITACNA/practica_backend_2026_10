const videojuegoService = require("../services/videojuegoService");

const eliminarVideojuego = (req, res) => {
    const id = req.params.id;

    videojuegoService.eliminarVideojuego(id, (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: "Error al eliminar videojuego" });
        } else {
            res.json(resultado);
        }
    });
};

module.exports = {
    eliminarVideojuego
};