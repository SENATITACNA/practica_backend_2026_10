const videojuegosService = require("../services/videojuegos.service");
const actualizarVideojuego = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const result = await videojuegosService.actualizarVideojuego(id, data);

        res.json({
            message: "Videojuego actualizado",
            data: result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    actualizarVideojuego
};