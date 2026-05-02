const express = require("express");
const app = express();

const ventaRoutes = require("./routes/ventaRoutes");

app.use(express.json());
app.use("/api", ventaRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
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