"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var arregloPalabras = [];
function menu(arregloPalabras) {
    console.log("1- Para cargar arreglo.");
    console.log("2- Para insertar nueva palabra.");
    console.log("3- Para buscar una palabra en el listado.");
    console.log("4- Para eliminar una palabra del listado");
    console.log("5- Para actualizar una palabra del listado");
    console.log("6- Para mostrar listado.");
    console.log("---------------");
    var elegirMenu = ReadlineSync.questionInt("Ingrese la opcion que desea: ");
    while (elegirMenu != 0) {
        switch (elegirMenu) {
            case 1:
                cargarArreglo();
                console.log("listado de palabras:", arregloPalabras);
                break;
            case 2:
                insertarPalabra();
                console.log("Palabra insertada al listado", arregloPalabras);
                break;
            case 3:
                if (buscarPalabra() >= 0) {
                    console.log("La palabra se encuentra en el listado.");
                }
                else {
                    console.log("La palabra NO se encuentra en el listado.");
                }
                break;
            case 4:
                console.log("elige la palabra que desea eliminar:", arregloPalabras);
                eliminarPalabra();
                console.log("Se elimino la palabra y el listado queda asi: ", arregloPalabras);
                break;
            case 5:
                console.log(arregloPalabras);
                actualizar();
                console.log("Se modificó la palabra y el listado queda asi: ", arregloPalabras);
                break;
            case 6:
                console.log(arregloPalabras);
                break;
            default:
                console.log("Ingresar una opción válida.");
                break;
        }
        elegirMenu = ReadlineSync.questionInt("Elige la opcion que desea: ");
    }
}
menu(arregloPalabras);
function cargarArreglo() {
    var ingresar = ReadlineSync.question("Ingrese palabra y vacio para finalizar: ");
    while (ingresar != "") {
        arregloPalabras.push(ingresar);
        ingresar = ReadlineSync.question("Ingrese palabra y vacio para finalizar: ");
    }
}
function insertarPalabra() {
    var insertar = ReadlineSync.question("Inserte nueva palabra al listado: ");
    arregloPalabras.push(insertar);
}
function buscarPalabra() {
    var busqueda = ReadlineSync.question("Ingrese la palabra que desea buscar: ");
    for (var i = 0; i < arregloPalabras.length; i++) {
        if (arregloPalabras[i] == busqueda) {
            return i;
        }
    }
    return -1;
}
function eliminarPalabra() {
    var eliminar = ReadlineSync.question("Ingrese la palabra a eliminar: ");
    var indice = arregloPalabras.indexOf(eliminar);
    arregloPalabras.splice(indice, 1);
    return arregloPalabras;
}
function actualizar() {
    var actualizar = ReadlineSync.question("Indique del listado cual desea modificar: ");
    var indice = arregloPalabras.indexOf(actualizar);
    var reemplazar = ReadlineSync.question("Ingrese la palabra nueva: ");
    arregloPalabras.splice(indice, 1, reemplazar);
    return arregloPalabras;
}
