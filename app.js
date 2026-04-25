const express = require("express");
const app = express();
const categoriaRoutes = require("./routes/categoriaRoutes");
app.use(express.json());
app.use("/api", categoriaRoutes);
app.listen(3000, () => {
 console.log("Servidor corriendo en puerto 3000");
});
