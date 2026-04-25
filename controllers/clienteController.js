const clienteService = require('../services/clienteService');

const createCliente = async (req, res) => {
    try {
        const cliente = req.body;

        const result = await clienteService.createCliente(cliente);

        res.status(201).json({
            message: 'Cliente creado correctamente',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = {
    createCliente
}; 