const express = require("express");
const app = express();

const videojuegoRoutes = require("./routes/videojuegoRoutes");

app.use(express.json());

app.use("/api", videojuegoRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});