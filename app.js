const express = require("express");
const app = express();
const ventaRoutes = require("./routes/ventaRoutes");
app.use(express.json());
app.use("/api", ventaRoutes);
app.listen(3000, () => {
 console.log("Servidor corriendo en puerto 3000");
});
