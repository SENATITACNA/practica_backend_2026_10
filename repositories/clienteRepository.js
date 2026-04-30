const db = require('../config/db');

// 🔍 Buscar por ID
const getById = (id) => {
    return new Promise((resolve, reject) => {

        db.query('SELECT * FROM clientes WHERE id = ?', [id], (err, results) => {
            if (err) reject(err);
            else resolve(results[0]);
        });

    });
};

// ✏️ Actualizar
const update = (id, cliente) => {
    return new Promise((resolve, reject) => {

        const query = `
            UPDATE clientes
            SET nombre = ?, email = ?
            WHERE id = ?
        `;

        db.query(query, [cliente.nombre, cliente.email, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });

    });
};

module.exports = {
    getById,
    update
};