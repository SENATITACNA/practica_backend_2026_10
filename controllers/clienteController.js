const clienteService = require('../services/clienteService');

const updateCliente = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;

        if (!data.nombre || !data.email) {
            return res.status(400).json({
                message: 'Nombre y email son obligatorios'
            });
        }

        const result = await clienteService.updateCliente(id, data);

        if (!result) {
            return res.status(404).json({
                message: 'Cliente no encontrado'
            });
        }

        res.status(200).json({
            message: 'Cliente actualizado correctamente'
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    updateCliente
};