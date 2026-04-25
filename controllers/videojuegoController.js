const videojuegoService = require("../services/videojuegoService");

const actualizar = (req, res) => {
    const { id } = req.params;
    const datos = req.body;

    videojuegoService.modificarVideojuego(id, datos, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: "Error al actualizar" });
        } else {
            res.json({ mensaje: "Videojuego actualizado con éxito" });
        }
    });
};

module.exports = { actualizar };