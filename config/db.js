const mysql = require("mysql2");

// Configuración de acceso al servidor de la práctica
const connection = mysql.createConnection({
  host: "80.241.217.53",
  user: "desarrollador",
  password: "SENATI",
  database: "cafeteria"
});

// Verificación de la conexión
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    console.log("¡Conexión exitosa! Ya puedes trabajar con la tabla Categorías.");
  }
});

// Exportación para que los Repositories puedan usarla
module.exports = connection;