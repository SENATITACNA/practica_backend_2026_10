const db = require("../config/db");

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM ventas WHERE id = ?", [id], (err, results) => {
            if (err) reject(err);
            else resolve(results[0]);
        });
    });
};

const eliminar = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM ventas WHERE id = ?", [id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

module.exports = {
    getById,
    eliminar
};