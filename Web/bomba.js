'use strict';

let mostrarMensaje = () =>{
    console.log("pasaron 5 segundos");
}

let miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", function(e){
    //setTimeout(mostrarMensaje, 5000)
    let intervalo = setInterval(mostrarMensaje, 1000);
    clearInterval(intervalo);
})

