const ventasService = require("../services/ventasService");

const eliminarVenta = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                message: "ID inválido"
            });
        }

        const result = await ventasService.eliminarVenta(id);

        if (!result) {
            return res.status(404).json({
                message: "Venta no encontrada"
            });
        }

        res.status(200).json({
            message: "Venta eliminada correctamente"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    eliminarVenta
};