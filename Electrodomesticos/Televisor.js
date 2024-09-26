class Televisor extends ProductoElectronico {

    constructor(marca,modelo,precio,anyoLanzamiento,resolucion) {
        super(marca,modelo,precio,anyoLanzamiento);
        this.resolucion = resolucion;
    }

    detalles() {
        return '${super.detalles()}, Resolución de la pantalla: ${this.resolucion} píxeles';
    }

    calcularDescuento() {
        return this.precio * 0.15;
    }

    tipo() {
        return 'Televisor';
    }

    get resolucion() {
        return this.resolucion;
    }

    set resolucion(nuevaResolucion) {
        this.resolucion = nuevaResolucion;
    }

}