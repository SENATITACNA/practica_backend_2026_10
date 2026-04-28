const clienteService = require('../services/serviceCliente');

exports.eliminarCliente = async (req, res) => {
    try {
        const id = req.params.id;

        const resultado = await clienteService.eliminarCliente(id);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.json({ message: 'Cliente eliminado correctamente' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar cliente' });
    }
};