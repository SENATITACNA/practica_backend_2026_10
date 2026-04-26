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