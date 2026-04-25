const express = require("express");
const app = express();
const routerVentas = require("./routes/routerVentas");

app.use(express.json());
app.use("/api", routerVentas);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});