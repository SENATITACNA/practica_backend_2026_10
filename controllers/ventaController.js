const ventaService = require("../services/ventaService");

const obtenerVentas = (req, res) => {
 ventaService.obtenerVentas((err, resultados) => {
  if (err) {
   res.status(500).json({ error: "Error: No se pudieron obtener las ventas" });
  } else {
   res.status(200).json(resultados);
  }
 });
};

module.exports = { obtenerVentas };