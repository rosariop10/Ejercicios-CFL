'use estrict';

let detener = false;

let desactivarBomba = () =>{
    detener = true;
    
}

let activarBomba = () =>{
    let miH1 = document.getElementById("cuenta-Regresiva");
    let miInput = document.getElementById("segundos-Espera");
    let contador = Number(miInput.value);
    console.log(miInput.value);
    console.log(contador);  
    let miIntervalo = setInterval(function(){
        
        if(contador === 0 ){
            miH1.innerHTML = "BOOOMMMMM";
            clearInterval(miIntervalo);           
        } else if (detener == true){
            miH1.innerHTML = "Bomba desactivada"
            clearInterval(miIntervalo);
        }else{
            contador--;
            miH1.innerHTML = contador;
        }        
    },1000)
    console.log(contador);
}



let boton=document.getElementById("miBoton");
boton.addEventListener("click", activarBomba);

let botonDesactivar=document.querySelector(".desactivarBomba");
botonDesactivar.addEventListener("click", desactivarBomba);