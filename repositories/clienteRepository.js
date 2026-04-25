const db = require('../config/db');

const create = (cliente) => {
    return new Promise((resolve, reject) => {

        const query = `
            INSERT INTO clientes (nombre, email)
            VALUES (?, ?)
        `;

        db.query(query, [cliente.nombre, cliente.email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });

    });
};

module.exports = {
    create
};