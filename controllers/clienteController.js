const clienteService = require("../services/clienteService");
//Obtener Cliente - GET /api/clientes
const obtenerClientes = (req, res) => {
  clienteService.obtenerClientes((err, clientes) => {
    if (err) {
      res.status(500).json({ error: "Error al obtener clientes" });
    } else {
      res.json(clientes);
    }
  });
};

module.exports = { obtenerClientes };
