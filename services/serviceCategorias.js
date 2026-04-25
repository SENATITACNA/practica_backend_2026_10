const repositoryCategorias = require("../repositories/repositoryCategorias");

const actualizarCategorias = (id, categoria, callback) => {
    repositoryCategorias.actualizarCategorias(id, categoria, (err, resultado) => {
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
