'use estrict';

let saludar = () =>{
    console.log("Hola!!!");
}

let contador=0;

let aumentarContador = () =>{
    contador++;
    console.log("Hiciste " + contador +" clicks");
    alert(contador); 
    let miBoton = document.querySelector(".contador");
    miBoton.innerHTML = contador;
}

let img = document.getElementById("miImagen");
console.log(img.src);

let cambiarH3 = ()=>{
    let miInput=document.getElementById("nombre");
    let cadena = miInput.value;
    let largo = cadena.length;
    console.log(largo);
    let nodoH3=document.getElementById("miH3");
    nodoH3.innerHTML= nodoH3.innerHTML + miInput.value;
    
}


