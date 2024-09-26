class Portatil extends ProductoElectronico {
    constructor(marca, modelo, precio, anyoLanzamiento, ram) {
        super(marca,modelo,precio,anyoLanzamiento);
        this.ram = this.validarRam(ram);
    }


    detalles() {
        return '${super.detalles()}, Tamaño de la memoria RAM: ${this.ram} GB';
    }

    calcularDescuento() {
        return this.precio * 0.12;
    }

    tipo() {
        return 'Portátil';
    }

    validarRam(ram) {
        return ram > 0 ? ram : 8;
    }

    get ram() {
        return this.ram;
    }

    set ram(nuevaRam) {
        this.ram = nuevaRam;
    }

}