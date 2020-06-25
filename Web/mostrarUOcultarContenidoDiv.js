
'use strict';
let mostrarOcultar = () => {
    let div = document.getElementById("miDiv");
    div.classList.toggle("ocultar");
}


let miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", mostrarOcultar);


