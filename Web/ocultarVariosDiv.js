'use strict';

let mostrarOcultar = (i) => {
    let div = document.getElementsByClassName("miDiv");
    div[i].classList.toggle("ocultar");
}


let boton = document.getElementsByClassName("miBoton");
console.log(boton);

for(let i=0; i<boton.length; i++){
boton[i].addEventListener("click", function(e){
    mostrarOcultar(i);
})
}
