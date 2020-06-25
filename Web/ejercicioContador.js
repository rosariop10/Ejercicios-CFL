'use strict';

let contador=0;

let aumentarContador = () =>{
    contador++;
    let miH1 = document.querySelector("h1");
    miH1.innerHTML = contador;
}

let disminuirContador = () =>{
    contador--;
    let miH1 = document.querySelector("h1");
    miH1.innerHTML = contador;
}

let aumentarConInput = () =>{
    let miInput = document.getElementById("numero");
    let miH1 = document.querySelector("h1");
    contador = contador + Number(miInput.value);
    miH1.innerHTML = contador;
}

