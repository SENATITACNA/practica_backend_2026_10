const ventaService = require("../services/ventaService");

const eliminarVenta = (req, res) => {
    const { id } = req.params;

    ventaService.eliminarVenta(id, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: "Error al eliminar la venta" });
        } else if (resultado.affectedRows === 0) {
            res.status(404).json({ mensaje: "Venta no encontrada" });
        } else {
            res.status(200).json({ mensaje: "Venta eliminada correctamente" });
        }
    });
};

module.exports = {
    eliminarVenta
};