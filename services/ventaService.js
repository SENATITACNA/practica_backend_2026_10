const ventasRepository = require("../repositories/ventasRepository");
const Venta = require("../models/ventasModel");

const eliminarVenta = async (id) => {

    const venta = await ventasRepository.getById(id);

    if (!venta) return null;

    const ventaModel = new Venta(venta);

    return await ventasRepository.eliminar(ventaModel.id);
};

module.exports = {
    eliminarVenta
};