const express = require("express");
const app = express();

const videojuegosRoutes = require("./routes/videojuegos.routes");

app.use(express.json());
app.use("/api", videojuegosRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});