const videojuegoService = require("../services/videojuegoService");

const crearvideojuego = (req, res) => {
 const nuevovideojuego = req.body;
 videojuegoService.crearProducto(nuevovideojuego, (err, resultado) =>
{
 if (err) {
 res.status(500).json({ error: "Error al crear producto"
});
 } else {
 res.status(201).json(resultado);
 }
 });
};


module.exports = {
 crearvideojuego
};