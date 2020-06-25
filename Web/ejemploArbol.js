'use estrict';

let saludar = () =>{
    console.log("Hola!!!");
}

let contador=0;

let aumentarContador = () =>{
    contador++;
    console.log(contador);
    alert(contador); 
    let miBoton = document.querySelector(".contador");
    miBoton.innerHTML = contador;
}

//alert("Hola!!!");
//alert("hola2!");

let miH1 = document.querySelector("h1");
console.log(miH1.innerHTML);
miH1.innerHTML = "Soy el Título 1 modificado en js";

let img = document.getElementById("miImagen");
console.log(img.src);

let cambiarH3 = ()=>{
    let miInput=document.getElementById("nombre");
    let nodoH3=document.getElementById("miH3");
    nodoH3.innerHTML= nodoH3.innerHTML + miInput.value;
    
}


