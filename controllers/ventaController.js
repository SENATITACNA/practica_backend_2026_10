const ventaService = require("../services/ventaService");
const crearVenta = (req, res) => {
    const nuevaVenta = req.body;
    ventaService.crearVenta(nuevaVenta, (err, resultado) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(resultado);
        }
    });
};
module.exports = {
    crearVenta
};
