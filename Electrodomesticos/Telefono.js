class Telefono extends ProductoElectronico {
    constructor(marca,modelo,precio,anyoLanzamiento,tamanoPantalla) {
        super(marca,modelo,precio,anyoLanzamiento);
        this.tamanoPantalla =  this.validarTamanoPantalla(tamanoPantalla);
    }

    detalles() {
        return '${super.detalles()}, Tamaño de la pantalla: ${this.tamañopantalla} pulgadas';
    }

    calcularDescuento() {
        return this.precio * 0.1
    }

    tipo() {
        return 'Teléfono';
    }

    validarTamanoPantalla(tamanoPantalla) {
        return tamanoPantalla >= 0 ? tamanoPantalla : 27;
    }

    get tamanoPantalla() {
        return this.tamanoPantalla;
    }

    set tamanoPantalla(nuevoTamanoPantalla) {
        this.tamanoPantalla = nuevoTamanoPantalla;
    }

}