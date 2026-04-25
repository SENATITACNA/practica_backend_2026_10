const db = require('../config/db');

const obtenerCategorias = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM categorias', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

module.exports = {
    obtenerCategorias
};