const clientesService = require("../services/clientes.service");

const obtenerClientes = (req, res) => {
    clientesService.listarClientes((err, clientes) => {
        if (err) {
            res.status(500).json({ error: "Error al obtener clientes" });
        } else {
            res.json(clientes);
        }
    });
};

module.exports = {
    obtenerClientes
};