const express = require("express");
const app = express();
const routerClientes = require("./routes/routerClientes");

app.use(express.json());
app.use("/api", routerClientes);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});