const categoriaRepository = require("../repositories/categoriaRepository");

const listarCategorias = (callback) => {
    categoriaRepository.obtenerCategorias((err, productos) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, productos);
        }
    });
};

module.exports = {
 listarCategorias
};