const connection = require("../config/db");

const actualizarVideojuego = (id, data) => {
    return new Promise((resolve, reject) => {
        const { nombre, precio, consola, stock } = data;

        const sql = "UPDATE videojuegos SET nombre = ?, precio = ?, consola = ?, stock = ? WHERE id = ?";

        connection.query(
            sql,
            [nombre, precio, consola, stock, id],
            (err, result) => {
                if (err) {
                    console.log("SQL ERROR:", err.sql);
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
};

module.exports = {
    actualizarVideojuego
};