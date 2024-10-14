"use strict";

// Devuelve el número de letras (ignora espacios y símbolos)
function letras(cadena) { 
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
    return cadena.split(" ").reverse().join(" ");
}

// Comprueba si la cadena es un palíndromo (sin tener en cuenta espacios ni mayúsculas/minúsculas)
function palindromo(cadena) {
    let limpio = cadena.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let reves = limpio.split("").reverse().join("");
    return limpio === reves;
}

// (Optativa) Elimina números y símbolos de la cadena, dejando solo caracteres alfabéticos
function limpiar(cadena) {
    return cadena.replace(/[^a-zA-Z\s]/g, "");
}
