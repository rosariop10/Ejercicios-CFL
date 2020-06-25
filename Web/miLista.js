'use estrict';

let agregarTarea = () =>{
    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = miInput.value;
    miOl.appendChild(nuevaTarea);
}



let miBoton = document.querySelector(".miBoton");
let miInput = document.querySelector(".nuevaTarea");
let miOl = document.querySelector(".miOl");
miBoton.addEventListener("click", agregarTarea);