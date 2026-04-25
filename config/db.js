const mysql = require("mysql2");

// Configuración de la conexión
const connection = mysql.createConnection({
  host: "80.241.217.53",
  user: "desarrollador",
  password: "SENATI",
  database: "cafeteria"
});

// Intentar conectar
connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err.message);
  } else {
    console.log("Conectado con éxito a MySQL (BD: cafeteria)");
  }
});

// Exportar la conexión para usarla en los Repositories
module.exports = connection;