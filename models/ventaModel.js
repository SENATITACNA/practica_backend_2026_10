class Venta {
    constructor(id, cliente_id, videojuego_id, cantidad, total) {
        this.id = id;
        this.cliente_id = cliente_id;
        this.videojuego_id = videojuego_id;
        this.cantidad = cantidad;
        this.total = total
    }
}

module.exports = Venta;
