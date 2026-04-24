const crearVideoJuego = (req, res) => {
 const NuevoVideoJuego = req.body;
 videojuegoService.crearVideoJuego(NuevoVideoJuego, (err, resultado) =>
{
 if (err) {
 res.status(500).json({ error: "Error al crear Nuevo Videojuego"
});
 } else {
 res.status(201).json(resultado);
 }
 });
};

module.exports = {
 crearVideoJuego,
};