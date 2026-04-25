const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '80.241.217.53',
    user: 'desarrollador',
    password: 'SENATI',
    database: 'cafeteria'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a la BD');
});

module.exports = connection;