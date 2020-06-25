let miInput = document.querySelector(".misTareas");
let miBoton = document.querySelector(".guardarTareas");
let miLista = document.querySelector(".miLista");
let botonEliminar = document.querySelector(".eliminarTareas");

let tareas = [];

let actualizarTareas = () => {
    miLista.innerHTML = "";
    for (let i = 0; i < tareas.length; i++) {
        let miLi = document.createElement("li");
        miLi.innerHTML = tareas[i];
        miLista.appendChild(miLi);
    }
}


let guardarTarea = () => {
    let nuevaTarea = miInput.value;
    tareas.push(nuevaTarea);
    miInput.value = "";
    actualizarTareas();
}

miBoton.addEventListener("click", guardarTarea);

let eliminarTareas = () => {
    tareas = [];
    actualizarTareas();

}

botonEliminar.addEventListener("click", eliminarTareas);