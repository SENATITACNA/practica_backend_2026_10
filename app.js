const express = require("express");
const app = express();
const routesVentas = require("./routes/routesVentas");
app.use(express.json());
app.use("/api", routesVentas);
app.listen(3000, () => {
 console.log("Servidor corriendo en puerto 3000");
});
