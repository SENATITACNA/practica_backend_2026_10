class Cliente {
    constructor({ id = null, nombre, email }) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
}

module.exports = Cliente;