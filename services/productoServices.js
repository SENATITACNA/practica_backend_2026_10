const productoRepository = require("../repositories/productoRepositories");
const listarCategorias = (callback) => {
 productoRepository.listarCategorias((err, categorias) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, categorias);
  }
 });
};
module.exports = {
 listarCategorias
};