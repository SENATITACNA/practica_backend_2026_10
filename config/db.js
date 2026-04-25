const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "80.241.217.53",
    user: "desarrollador", // Conectarse a MySQL
    password: "SENATI", // Contraseña.
    database: "cafeteria" //Nombre de la base de datos.
});

connection.connect((err) => {
    if (err) {
        console.log("Error de conexión:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});
module.exports = connection;