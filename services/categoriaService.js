const categoriaRepository = require("../repositories/categoriaRepository");

const actualizarCategorias = (id, categoria, callback) => {
    categoriaRepository.actualizarCategorias(id, categoria, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, {
                mensaje: "Producto actualizado correctamente"
            });
        }
    });
};

module.exports = { actualizarCategorias };
