let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Ingrese numero");
let resto = numero % 2;
if(numero == 0){
    console.log("El número es cero");
}else{
    if(resto == 0)
        console.log("El número es par");
    else{
        console.log("El número es impar");
    }}