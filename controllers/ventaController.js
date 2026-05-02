const ventaService = require("../services/ventaService");

const eliminarVenta = (req, res) => {
  const id = req.params.id;
  ventaService.eliminarVenta(id, (err, resultado) => {
    if (err) {
      res.status(500).json({ error: "Error al eliminar venta" });
    } else {
      res.json(resultado);
    }
  });
};

module.exports = { eliminarVenta };
const crearVenta = (req, res) => {
 const nuevaVenta = req.body;
 ventaService.crearVenta(nuevaVenta, (err, resultado) => {
  if (err) {
   res.status(500).json({ error: err.message });
  } else {
   res.status(201).json(resultado);
  }
 });
};
module.exports = {
 crearVenta
};
