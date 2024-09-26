class ProductoElectronico {
    constructor(marca, modelo, precio, anyoLanzamiento) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = this.validarPrecio(precio);
        this.anyoLanzamiento = this.validarAnyo(anyoLanzamiento);
    }

    // Métodos
    detalles() {
        return `Marca: ${this.marca}, 
        Modelo: ${this.modelo}, 
        Precio: $${this.precio}, 
        Año de lanzamiento: ${this.anyoLanzamiento}`;
    }

    calcularDescuento() {
        return this.precio * 0.05; 
    }

    tipo() {
        return 'Producto Electrónico';
    }


    validarPrecio(precio) {
        return precio >= 0 ? precio : 0;
    }

    validarAnyo(anyo) {
        return (anyo >= 1900 && anyo <= 2025) ? anyo : 2024; 
    }
}