const express = require("express");
const app = express();

const categoriaRoutes = require("./routes/categoriaRoutes");
app.use(express.json());
app.use("/api", categoriaRoutes);
app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
const videojuegoRoutes = require("./routes/videojuegoRoutes");
app.use(express.json());
app.use("/api", videojuegoRoutes);
app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
const productoRoutes = require("./routes/productoRoutes");
app.use(express.json());
app.use("/api", productoRoutes);
app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
const clienteRoutes = require("./routes/clienteRoutes");
app.use(express.json());
app.use("/api", clienteRoutes);
app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
