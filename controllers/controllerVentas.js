const serviceVentas = require("../services/serviceVentas");

const crearVenta = (req, res) => {
  console.log("CONTENT-TYPE:", req.headers["content-type"]);
  console.log("BODY:", req.body);

  const nuevaVenta = req.body;

  serviceVentas.crearVenta(nuevaVenta, (err, resultado) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json(resultado);
  });
};

module.exports = {
  crearVenta
};