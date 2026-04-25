const ventasService = require('../services/servicesVentas');

const actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { cliente_id } = req.body;

        const respuesta = await ventasService.actualizarCliente(id, cliente_id);

        if (respuesta === 0) {
            return res.status(404).json({
                mensaje: "No se encontró la venta"
            });
        }

        res.json({
            mensaje: "Cliente actualizado correctamente"
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    actualizarCliente
};