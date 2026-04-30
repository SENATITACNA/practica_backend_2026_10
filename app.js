const express = require("express");
const app = express();

app.use(express.json());

const ventasRoutes = require("./routes/ventasRoutes");
app.use("/api", ventasRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});