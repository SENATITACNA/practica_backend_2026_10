const clienteService = require("../services/clienteService");
const obtenerClientes = (req, res) => {
 clienteService.listarClientes((err, clientes) => {
 if (err) {
 res.status(500).json({ error: "Error del servidor" });
 } else {
 res.json(clientes);
 }
 });
};

module.exports = {
 obtenerClientes
};