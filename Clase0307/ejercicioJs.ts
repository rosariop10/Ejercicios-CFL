import * as ReadlineSync from './node_modules/readline-sync';

let numero1:number = ReadlineSync.questionInt("Ingrese el numero1"); 
let numero2:number = ReadlineSync.questionInt("Ingrese el numero2"); 
let suma:number = 0;

if(numero1>numero2){
    let aux:number = numero1;
    numero1=numero2;
    numero2=aux;
}
for(numero1;numero1<=numero2;numero1++){
    suma=(suma + numero1);
}
console.log("La suma entre numeros es:" + suma);