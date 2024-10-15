"use strict"; 

// Devuelve el número de letras
function letras(cadena) { 
    // .replace ignora espacios y símbolos
    let soloLetras = cadena.replace(/[^a-zA-Z]/g, " ");
    return soloLetras.length;
}

// Devuelve el número de palabras en la cadena
function palabras(cadena) {
    let soloPalabras = cadena.trim().split(/\s+/);
    return soloPalabras.length;
}

// Devuelve la cadena en mayúsculas
function maysc(cadena) {
    return cadena.toUpperCase();
}

// Devuelve la cadena con la primera letra de cada palabra en mayúscula
function titulo(cadena) {
    // \w: coincide con el primer carácter de palabra (letras, números, guiones bajos)
    // \S*: coincide con cero o más caracteres que no son espacios
    // g: modificador global, busca todas las coincidencias
    return cadena.replace(/\w\S*/g, function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
}

// Devuelve la cadena con las letras al revés
function letrasReves(cadena) {
    return cadena.split("").reverse().join("");
}

// Devuelve la cadena con las palabras al revés
function palabrasReves(cadena) {
    // Dividimos la cadena cada vez que encontramos un espacio
    // damos la vuelta al array y hacemos que cada elemento del 
    // array se separe por un espacio en blanco.
    return cadena.split(" ").reverse().join(" ");
}

// Comprueba si la cadena es un palíndromo
// No es case sensitive
function palindromo(cadena) {
    //Eliminamos caracteres no deseados
    let limpio = cadena.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Volteamos la cadena
    let reves = limpio.split("").reverse().join("");
    
    // Comprobamos si son iguales 
    return limpio === reves;

}

// Elimina números y símbolos de la cadena, dejando solo caracteres alfabéticos
function limpiar(cadena) {
    return cadena.replace(/[^a-zA-Z\s]/g, "");
}

// Me llamo pedro