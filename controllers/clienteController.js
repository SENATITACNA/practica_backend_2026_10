const clienteService = require("../services/clienteService");

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
const eliminarCliente = (req, res) => {
 const id = req.params.id;
 clienteService.eliminarCliente(id, (err, resultado) => {
  if (err) {
   res.status(500).json({ error: "Error al eliminar el cliente" });
  } else {
   res.status(200).json(resultado);
  }
 });
};

module.exports = { eliminarCliente };
