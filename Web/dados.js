'use estrict';

let miBoton = document.querySelector(".miBoton");
let miH1 = document.querySelector("h1");

let contador = 0;

let tirarDados = () => {
    for (let i = 0; i < 1000; i++) {
        let d1 = Math.floor((Math.random() * (7-1)+1));
        let d2 = Math.floor((Math.random() * (7-1)+1));
        let suma = (d1 + d2);        
        if (suma === 7) {
            contador++; 
        console.log(suma);
        }
    }
    miH1.innerHTML = ("La cantidad de veces que salió 7 es: " + contador);  
}



miBoton.addEventListener("click", tirarDados);




//function(e){
   



    //tirarDados();
//})
