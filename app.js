const express = require("express");
const app = express();

const categoriasroutes = require("./routes/categoriasroutes");

app.use(express.json());
app.use("/api", categoriasroutes);

app.listen(3000, () => {
 console.log("Servidor corriendo en puerto 3000");
});