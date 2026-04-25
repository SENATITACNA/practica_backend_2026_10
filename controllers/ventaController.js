const ventaService = require("../services/ventaService");

const actualizarVenta = (req, res) => {
    const id = req.params.id;
    const datosNuevos = req.body;

    ventaService.actualizarVenta(id, datosNuevos, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: "Error al actualizar la venta", detalle: err.sqlMessage });
        } else if (resultado.affectedRows === 0) {
            res.status(404).json({ mensaje: "No se encontró la venta con ese ID" });
        } else {
            res.json({ mensaje: "Venta actualizada con éxito", id });
        }
    });
};

module.exports = { actualizarVenta };