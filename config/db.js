const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "80.241.217.53",
  user: "desarrollador",
  password: "SENATI",
  database: "cafeteria"
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a MySQL:", err.message);
  } else {
    console.log("Conectado con éxito a MySQL (BD: cafeteria)");
  }
});

module.exports = connection;