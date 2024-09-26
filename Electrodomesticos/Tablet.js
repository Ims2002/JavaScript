class Tablet extends ProductoElectronico {

    constructor(marca,modelo,precio,anyoLanzamiento,almacenamiento) {
        super(marca,modelo,precio,anyoLanzamiento);
        this.almacenamiento = this.validarAlmacenamiento(almacenamiento);
    }

    detalles() {
        return '${super.detalles()}, Cantidad de almacenamiento: ${this.almacenamiento} GB';
    }

    calcularDescuento() {
        return this.precio * 0.08;
    }

    tipo() {
        return 'Tablet';
    }

    validarAlmacenamiento(almacenamiento) {
        return this.almacenamiento >= 0 ? almacenamiento : 64;
    }

    get almacenamiento() {
        return this.almacenamiento;
    }

    set almacenamiento(nuevoAlmacenamiento) {
        this.almacenamiento = nuevoAlmacenamiento;
    }

}