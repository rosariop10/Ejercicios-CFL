"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var numero1 = ReadlineSync.questionInt("Ingrese el numero1");
var numero2 = ReadlineSync.questionInt("Ingrese el numero2");
var suma = 0;
if (numero1 > numero2) {
    var aux = numero1;
    numero1 = numero2;
    numero2 = aux;
}
for (numero1; numero1 <= numero2; numero1++) {
    suma = (suma + numero1);
}
console.log("La suma entre numeros es:" + suma);
