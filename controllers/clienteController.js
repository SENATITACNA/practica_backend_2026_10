const clienteService = require("../services/clienteService");

const obtenerClientes = (req, res) => {
    clienteService.obtenerClientes((err, resultados) => {
        if (err) {
            res.status(500).json({ error: "Error al obtener clientes", detalle: err.sqlMessage });
        } else {
            res.json(resultados);
        }
    });
};

module.exports = { obtenerClientes };
