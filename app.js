const express = require("express");
const app = express();

const clientesRoutes = require("./routes/clientes.routes");

app.use(express.json());
app.use("/api", clientesRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});