const ventaService = require("../services/ventaService");

const crearVenta = (req, res) => {
    const nuevaVenta = req.body;
    ventaService.crearVenta(nuevaVenta, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(resultado);
        }
    });
};

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
    crearVenta,
    eliminarVenta
};
