import * as ReadlineSync from './node_modules/readline-sync';

let arregloPalabras: string[] = [];

let elegirMenu: number = ReadlineSync.questionInt("Ingrese 1 para cargar palabras, 2 para insertar, 3 para buscar, 4 para eliminar, 5 para actualizar el arreglo, 6 para mostrar el arreglo y 0 para salir ");
function menu(seleccion: number) {
    switch (seleccion) {
        case 1:
            cargarArreglo();
            break;
        case 2:
            insertar();
            break;
        case 3:
            if (buscarPalabra() >= 0) {
                console.log("La palabra se encuentra en el listado.");
            } else {
                console.log("La palabra NO se encuentra en el listado.");
            }
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

function cargarArreglo():void {
    let palabra: string = ReadlineSync.question("Ingrese una palabra. x para finalizar: ");

    while (palabra != "x") {
        arregloPalabras.push(palabra);
        palabra = ReadlineSync.question("Ingrese una palabra. x para finalizar: ");
    }
}


function insertar(): void {
    let palabra: string = ReadlineSync.question("Ingrese una nueva palabra a agregar");
    arregloPalabras.push(palabra);
}

function buscarPalabra() {
    let palabraABuscar: string = ReadlineSync.question("Ingrese la palabra que desea buscar: ");
    for (let i = 0; i < arregloPalabras.length; i++) {
        if (arregloPalabras[i] == palabraABuscar) {
            return i;
        }
    }
    return -1;
}


// function buscarPalabra(arregloPalabras): string {
//     let palabraABuscar: string = ReadlineSync.question("Indique la palabra a buscar: ");
//     for (let i: number = 0; i < arregloPalabras.length; i++) {
//         if (palabraABuscar == arregloPalabras[i]) {
//             return ("La palabra se encuentra en la posición: " + i + " del arreglo");
//         } else {
//             return ("La palabra buscada no se encuentra en el arreglo");
//         }
//     }
// }

// console.log("Resultado de buscar palabra: " + buscarPalabra(arregloPalabras));

function eliminarPalabra(): void {
    let palabraAEliminar: string = ReadlineSync.question("Indique la palabra a eliminar: ");
    arregloPalabras.splice(arregloPalabras.indexOf(palabraAEliminar), 1);
}

function actualizarPalabra(): void {
    let palabraABuscar: string = ReadlineSync.question("Indique la palabra a buscar: ");
    let palabraAReemplazar: string = ReadlineSync.question("Indique la palabra a reemplazar: ");
    for (let i: number = 0; i < arregloPalabras.length; i++) {
        if (palabraABuscar == arregloPalabras[i]) {
        arregloPalabras[i] = palabraAReemplazar; //algo que permita acceder al índice???
        }
    }
}

function mostrarArreglo(): void {
    for (let i: number = 0; i < arregloPalabras.length; i++) {
    console.log("La palabra guardada en la posición "+ i +" es "+ arregloPalabras[i]);
    }
}



// function buscarPalabra(){
//     let palabraABuscar:string = ReadlineSync.question("Indique la palabra a buscar: ");
//     if(arregloPalabras.indexOf(palabraABuscar) != -1){
//     console.log("La palabra: " + palabraABuscar + "se encuentra en el arreglo");
//     }else{
//         console.log("La palabra: " + palabraABuscar + "no se encuentra en el arreglo");
//     }
// }

//buscarPalabra();