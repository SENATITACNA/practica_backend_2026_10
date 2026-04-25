const express = require("express");
const app = express();
const routerCategorias = require("./routes/routerCategorias");

app.use(express.json());
app.use("/api", routerCategorias);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});