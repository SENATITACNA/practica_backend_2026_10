const categoriaRepository = require("../repositories/categoriaRepository");

const obtenerCategorias = (callback) => {
    categoriaRepository.obtenerCategorias((err, resultados) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultados);
        }
    });
};

// AGREGA ESTA FUNCIÓN:
const crearCategoria = (datos, callback) => {
    categoriaRepository.crearCategoria(datos, callback);
};

module.exports = { obtenerCategorias, crearCategoria };