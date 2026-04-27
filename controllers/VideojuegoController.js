const VideojuegoController = require('../controllers/VideojuegoController');

const borrarVideojuego = (req, res) => {
    const id = req.params.id;
    VideojuegoController.borrarVideojuego(id, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: "Error al borrar videojuego" });
        } else {
            res.json(resultado);
        }
    });
};

module.exports = {
    borrarVideojuego
};  