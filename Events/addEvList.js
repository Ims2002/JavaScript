window.addEventListener('load', () => {
    // Obtenemos la lista donde se mostrará el texto
    const contenidoOl = document.getElementById('contenido');
    
    const controlador = () => {

        //alert('Botón Pulsado!!!');
        // Creamos un nuevo elemento de lista <li>
        const li = document.createElement('li'); 
        
        // Asignamos el contenido del <li>
        li.textContent = 'Botón Pulsado!!!';

        // Añadimos el <li> a la lista <ul>
        contenidoOl.appendChild(li); 

    };

    // Buscamos el bt1 por su ID y le indicamos que cada
    // vez que se clicke ejecute la función "controlador"
    const bt1 = document.getElementById('bt1');
    bt1.addEventListener('click', controlador);

    // Seguimos el ejemplo anterior pero en este caso nuestro
    // objetivo es eliminar el listener de "bt1"
    const bt2 = document.getElementById('bt2');
    bt2.addEventListener('click', () => {
        //alert('Listener Eliminado K.O.');
        const li2 = document.createElement('li'); 
        li2.textContent = 'Listener Eliminado K.O.';
        contenidoOl.appendChild(li2);
        
        // El esta sentencia eliminamos la función que utiliza el 
        // listener de bt1, eliminamos el su listener y por tanto
        // ya no utiliza la función pero la función no se elimina 
        // como tal.
        bt1.removeEventListener('click', controlador);

    })

});
    