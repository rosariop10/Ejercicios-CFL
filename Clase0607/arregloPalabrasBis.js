"use strict";
exports.__esModule = true;
var ReadlineSync = require("./node_modules/readline-sync");
var arregloPalabras = [];
var elegirMenu = ReadlineSync.questionInt("Ingrese 1 para cargar palabras, 2 para insertar, 3 para buscar, 4 para eliminar, 5 para actualizar el arreglo, 6 para mostrar el arreglo y 0 para salir ");
function menu(seleccion) {
    switch (seleccion) {
        case 1:
            cargarArreglo();
            break;
        case 2:
            insertar();
            break;
        case 3:
            encontrarPalabra();
            break;
        case 4:
            eliminarPalabra();
            break;
        case 5:
            actualizarPalabra();
            break;
        case 6:
            mostrarArreglo();
            break;
    }
}
while (elegirMenu != 0) {
    menu(elegirMenu);
    elegirMenu = ReadlineSync.questionInt("Ingrese 1 para cargar palabras, 2 para insertar, 3 para buscar, 4 para eliminar, 5 para actualizar el arreglo, 6 para mostrar el arreglo y 0 para salir ");
}
function cargarArreglo() {
    var palabra = ReadlineSync.question("Ingrese una palabra. x para finalizar: ");
    while (palabra != "x") {
        arregloPalabras.push(palabra);
        palabra = ReadlineSync.question("Ingrese una palabra. x para finalizar: ");
    }
}
function buscarPalabra(palabraABuscar) {
    for (var i = 0; i < arregloPalabras.length; i++) {
        if (arregloPalabras[i] == palabraABuscar) {
            return i;
        }
    }
    return -1;
}
function encontrarPalabra() {
    var encontrarPalabra = ReadlineSync.question("Indique la palabra a buscar: ");
    var posicion = buscarPalabra(encontrarPalabra);
    if (posicion != -1) {
        console.log("La palabra buscada se encuentra en la posición " + posicion);
    }
    else {
        console.log("La palabra NO se encuentra en el listado.");
    }
}
function insertar() {
    var palabraAInsertar = ReadlineSync.question("Ingrese una nueva palabra a agregar ");
    var posicion = buscarPalabra(palabraAInsertar);
    if (posicion == -1) {
        arregloPalabras.push(palabraAInsertar);
    }
}
function eliminarPalabra() {
    var palabraAEliminar = ReadlineSync.question("Indique la palabra a eliminar: ");
    var posicion = buscarPalabra(palabraAEliminar);
    if (posicion != -1) {
        arregloPalabras.splice(buscarPalabra(palabraAEliminar), 1);
    }
}
function actualizarPalabra() {
    var palabraABuscar = ReadlineSync.question("Indique la palabra a buscar: ");
    var palabraAReemplazar = ReadlineSync.question("Indique la palabra a reemplazar: ");
    var posicion = buscarPalabra(palabraABuscar);
    if (posicion != -1) {
        arregloPalabras[posicion] = palabraAReemplazar;
    }
}
function mostrarArreglo() {
    for (var i = 0; i < arregloPalabras.length; i++) {
        console.log("La palabra guardada en la posición " + i + " es " + arregloPalabras[i]);
    }
}
