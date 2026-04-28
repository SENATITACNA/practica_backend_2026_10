const db = require("../config/db");

const obtenerCliente = (callback) => {
    const sql = "SELECT * FROM clientes";

    db.query(sql, (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

const actualizarCliente = (id, cliente, callback) => {
    const sql = "UPDATE clientes SET nombre = ?, correo = ?, telefono = ? WHERE id = ?";
    db.query(sql, [cliente.nombre, cliente.correo, cliente.telefono, id], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

const eliminarCliente = (id, callback) => {
    const sql = "DELETE FROM clientes WHERE id = ?";
    db.query(sql, [id], (err, resultado) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = {
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
};