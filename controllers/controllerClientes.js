const serviceClientes = require("../services/serviceClientes");
const obtenerClientes = (req, res) => {
  serviceClientes.obtenerClientes((err, clientes) => {
    if (err) {
      res.status(500).json({ error: "Error del servidor" });
    } else {
      res.json(clientes);
    }
  });
};

module.exports = { obtenerClientes };