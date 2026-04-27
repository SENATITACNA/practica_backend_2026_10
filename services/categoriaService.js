const categoriaRepository = require("../repositories/categoriaRepository");
const listarCategorias = (callback) => {
 categoriaRepository.listarCategorias((err, categorias) => {
  if (err) {
   callback(err, null);
  } else {
   callback(null, categorias);
   };
  });
};
module.exports = {
 listarCategorias
};