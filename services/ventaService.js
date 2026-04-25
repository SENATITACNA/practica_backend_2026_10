const ventaRepository = require("../repositories/ventaRepository");

const obtenerVentas = (callback) => {
 ventaRepository.obtenerVentas((err, resultados) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, resultados);
  }
 });
};

module.exports = { obtenerVentas };