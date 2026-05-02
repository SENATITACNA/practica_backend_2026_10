const db = require('../config/db');

exports.eliminarCliente = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM clientes WHERE id = ?';

        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};