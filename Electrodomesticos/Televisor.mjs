import { ProductoElectronico } from './ProductoElectronico.mjs';


export class Televisor extends ProductoElectronico {

    constructor(marca,modelo,precio,anyoLanzamiento,resolucion) {
        super(marca,modelo,precio,anyoLanzamiento);
        this._resolucion = resolucion;
    }

    detalles() {
        return `${super.detalles()}, 
        Resolución de la pantalla: ${this.resolucion} píxeles`;
    }

    calcularDescuento() {
        return this.precio * 0.15;
    }

    tipo() {
        return 'Televisor';
    }

    get resolucion() {
        return this._resolucion;
    }

    set resolucion(nuevaResolucion) {
        this._resolucion = nuevaResolucion;
    }

}