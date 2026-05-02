const db = require("../config/db");

const update = (id, data) => {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE videojuegos 
            SET nombre = ?, precio = ?, consola = ?, stock = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [data.nombre, data.precio, data.consola, data.stock, id],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
};

module.exports = {
    update
};