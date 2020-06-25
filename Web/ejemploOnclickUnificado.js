'use estrict';

let cambiarH1 = ()=>{
    let miInput=document.getElementById("nombre");
    let nodoH1=document.getElementById("miH1");
    nodoH1.innerHTML= nodoH1.innerHTML + miInput.value;
    
}

let miInput = document.getElementById("nombre");
miInput.addEventListener("change", cambiarH1);


let miElemento = document.querySelectorAll(".misH2");
console.log(miElemento);
console.log(miElemento.length);
console.log(miElemento[3]);

let miP = document.querySelector("p");
miP.classList.add("Clase1", "Clase2", "Clase3");
miP.classList.remove("Clase2");

let boton = document.getElementById("miBoton");
boton.addEventListener("click", function(e){
    this.classList.toggle("miClase");
})
