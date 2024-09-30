window.onload = function () {
    /*
    console.log('-- Primers elements de les llistes --');
    let ultimsElements = document.querySelectorAll('li:last-child');
    for (let i = 0; i < ultimsElements.length; i++) {
        console.log(ultimsElements[ultimsElements.length - 1].textContent);
    }
    */
    let contenidor = document.querySelectorAll("#contenidor");

    console.log("Hay ", contenidor.length, " nodos hijo");

    for (let i = 0; i < contenidor.length; i++) {
        let elemento = contenidor[i];

        console.log("Nodo " + (i + 1) + ": " + elemento.textContent);
        if (elemento.hasChildNodes()) {
            console.log("Este nodo tiene hijos:");
            for (let j = 0; j < elemento.childNodes.length; j++) {
                let hijo = elemento.childNodes[j];
                console.log("  - Hijo: " + hijo.textContent);
            }
        } 
    }
};
