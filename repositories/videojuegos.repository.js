const db = require('../config/db');

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM videojuegos', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};
  
module.exports = {
    getAll
};