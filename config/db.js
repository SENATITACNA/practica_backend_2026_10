const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "80.241.217.53",
  user: "desarrollador", // Usuario
  password: "SENATI", // Contraseña
  database: "cafeteria" // Nombre de la base de datos
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

module.exports = connection;