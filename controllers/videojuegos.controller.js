const videojuegosService = require("../services/videojuegos.service");
const actualizarVideojuego = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const result = await videojuegosService.actualizarVideojuego(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Videojuego no encontrado"
            });
        }

        res.json({
            message: "Videojuego actualizado correctamente"
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    actualizarVideojuego
};