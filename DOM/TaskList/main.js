//Alert >>> Solo Pop-Up
//Prompt >>> Pide Datos

let tareas = []; // Array para almacenar tareas

let prioridades = []; // Array para almacenar prioridades

function crearTareas() {
    // Si ya hay tareas salta error
    if (tareas.length > 0) {
        alert("Ya se han creado las tareas pendientes.");
        return;
    }
    // Si no hay tareas las solicita
    for (let i = 0; i < 5; i++) {
        let tarea = prompt(`Introduce la tarea pendiente ${i + 1}:`);
        if (tarea) {
            tareas.push(tarea);
            prioridades.push(''); // Inicializar sin prioridad
        }
    }

    mostrarTareas();
}

function mostrarTareas() {
    let listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = ""; // Vaciamos la lista antes de mostrar

    // Creamos la lista
    let ul = document.createElement("ul");
    // Recprremos la lista creada para ir añadiendo las tareas
    tareas.forEach((tarea, index) => {
        let li = document.createElement("li");
        li.textContent = tarea;

        // Aplicamos la prioridad si existe
        if (prioridades[index]) {
            li.classList.add(prioridades[index]);
        }

        ul.appendChild(li);
    });

    listaDiv.appendChild(ul);
}

function prioridadTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas agendadas.");
        return;
    }

    // Solicitamos la posicion de la tarea que queremos cambiar de prioridad
    let tarea = parseInt(prompt("Qué tarea quieres modificar? [1-5]"));

    if (tarea > 0 && tarea <= tareas.length) {
        let prioridad = prompt("Selecciona una prioridad: red, orange, green, delete");

        // Limpiar clases de prioridad anteriores
        let listaDiv = document.getElementById("lista");
        let items = listaDiv.getElementsByTagName("li");
        items[tarea - 1].classList.remove("prioridad-red", "prioridad-orange", "prioridad-green");

        // Aplicar nueva prioridad
        if (prioridad === "red") {
            items[tarea - 1].classList.add("prioridad-red");
            prioridades[tarea - 1] = "prioridad-red"; // Guardamos la prioridad en el array prioridades
        } else if (prioridad === "orange") {
            items[tarea - 1].classList.add("prioridad-orange");
            prioridades[tarea - 1] = "prioridad-orange";
        } else if (prioridad === "green") {
            items[tarea - 1].classList.add("prioridad-green");
            prioridades[tarea - 1] = "prioridad-green";
        } else if (prioridad === "delete") {
            // Si se elige "delete", quitar la prioridad
            prioridades[tarea - 1] = ''; // Limpiar la prioridad
        } else {
            alert("Prioridad no válida.");
        }

        mostrarTareas(); // Redibujar la lista de tareas
    } else {
        alert("Carácter no válido");
    }
}




function borrarTareas() {
    
    
    if(!tareas.length == 0) {
        // Bara borrar las tareas eliminamos todos los elementos de la lista.
        let listaDiv = document.getElementById("lista");
        listaDiv.innerHTML = "";

    } else {
        prompt(`No hay tareas a borrar.`);
    }

}

function cambiarTareaNom() {

    if (tareas.length == 0) {
        alert("No hay tareas agendadas.");
        return;
    }

    let posicionPalabra = parseInt(prompt("Cuál de tus tareas deseas cambiar de nombre [1-5]"));

    if(posicionPalabra>0 && posicionPalabra<=tareas.length) {
        // Solicitamos el nombre de la nueva tarea.
        let nuevaTarea = prompt("Nombre de la nueva tarea");
        // Con el id cambiamos el dato en el array.
        tareas[posicionPalabra-1] = nuevaTarea;
        // Redibujamos las tareas.
        mostrarTareas(tareas)

    } else {
        alert("Carácter no válido");
        return;
    }

}

function cambiarTareaPos() {

    if (tareas.length == 0) {
        alert("No hay tareas agendadas.");
        return;
    }

    let posicionOrigen = parseInt(prompt("Cuál de tus tareas deseas cambiar de posición? [1-5]"));
    let posicionDestino = parseInt(prompt("A que posicion deseas cambiar la tarea? [1-5]"));

    // Mostramos el array generado por swap, la 
    // funcion que cambia las posiciones de los datos
    mostrarTareas(swap(posicionOrigen-1,posicionDestino-1,tareas));

}


// Función de StackOverflow
let swap = (index1, index2, arr) => {
    if (index1 >= arr.length || index2 >= arr.length || index1 < 0 || index2 < 0) return;
  
    // Intercambiamos los elementos en las posiciones index1 e index2
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}




  