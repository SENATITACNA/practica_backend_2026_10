const express = require("express");
const app = express();

const clienteRoutes = require("./routes/routesCliente");

app.use(express.json());
app.use("/api", clienteRoutes);

app.listen(3000, () => {
 console.log("Servidor corriendo en puerto 3000");
});