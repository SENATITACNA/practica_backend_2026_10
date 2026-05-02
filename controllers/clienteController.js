const clienteService = require("../services/clienteService");

const actualizarCliente = (req, res) => {
  const id = req.params.id;
  const clienteActualizado = req.body;
  clienteService.actualizarCliente(id, clienteActualizado, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al actualizar cliente" });
    } else {
      res.json(resultado);
    }
  });
};

module.exports = { actualizarCliente };
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
module.exports = {
    eliminarCliente 
};
