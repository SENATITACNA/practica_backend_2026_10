const express = require("express");
const app = express();

const routeVideojuegos = require("./routes/routeVideojuegos");
app.use(express.json());
app.use("/api", routeVideojuegos);
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
