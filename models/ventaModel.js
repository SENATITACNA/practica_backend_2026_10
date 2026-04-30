class Venta {
    constructor({ id = null, cliente_id, videojuego_id, total }) {
        this.id = id;
        this.cliente_id = cliente_id;
        this.videojuego_id = videojuego_id;
        this.total = total;
    }
}

module.exports = Venta;