const express = require("express");
const app = express();

app.use(express.json());

const clienteRoutes = require("./routes/clienteRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const ventaRoutes = require("./routes/ventaRoutes");
const videojuegoRoutes = require("./routes/videojuegoRoutes");

app.use("/api", clienteRoutes);
app.use("/api", categoriaRoutes);
app.use("/api", ventaRoutes);
app.use("/api", videojuegoRoutes);

app.listen(3000, () => {
 console.log("Servidor corriendo en puerto 3000");
});
