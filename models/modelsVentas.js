const db = require('../config/db');

const actualizarClientePorId = (id, cliente_id) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE ventas SET cliente_id = ? WHERE id = ?';

        db.query(query, [cliente_id, id], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    actualizarClientePorId
};