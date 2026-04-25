const express = require("express");
const app = express();

// 1. Importar las rutas de videojuegos que creaste
// Asegúrate de que el nombre del archivo sea exactamente videojuegoRoutes.js
const videojuegoRoutes = require("./routes/videojuegoRoutes");

// 2. Middlewares
// Esto es VITAL para el método PUT. Permite que el servidor entienda los datos JSON que envíes.
app.use(express.json());

// 3. Registrar las rutas
// Usamos el prefijo "/api" como está en los ejemplos de clase
app.use("/api", videojuegoRoutes);

// 4. Configuración del puerto y arranque
const PORT = 3000;

app.listen(PORT, () => {
    console.log("-------------------------------------------------");
    console.log(`|  Servidor corriendo en http://localhost:${PORT}  |`);
    console.log(`|  Ruta de Leonardo lista: PUT /api/videojuegos  |`);
    console.log("-------------------------------------------------");
});